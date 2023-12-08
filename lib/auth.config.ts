import { locales as i18locales } from "@/i18n";
import { NextResponse } from "next/server";

export const authConfig = {
    pages: {
        signIn: "/login"
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.firstName = user.firstName;
                token.lastName = user.lastName;
                token.isAdmin = user.isAdmin;
            }
            return token;
        },
        async session({ session, token }: any) {
            if (token) {
                session.user.id = token.id;
                session.user.email = token.email;
                session.user.firstName = token.firstName;
                session.user.lastName = token.lastName;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },

        authorized({ auth, request }: any) {
            const locales = i18locales.join('|');

            const user = auth?.user;

            const isOnLoginPage = new RegExp(`^/(${locales})/login$`)
                .test(request.nextUrl?.pathname);
            const isOnRegisterPage = new RegExp(`^/(${locales})/register$`)
                .test(request.nextUrl?.pathname);
            const isOnAdminPanel = new RegExp(`^/(${locales})/admin`)
                .test(request.nextUrl?.pathname);
            const isOnDashboardPage = new RegExp(`^/(${locales})/dashboard`)
                .test(request.nextUrl?.pathname);
            const isOnProfilePage = new RegExp(`^/(${locales})/profile`)
                .test(request.nextUrl?.pathname);
            const isOnIndividualJournalPage = new RegExp(`^/(${locales})/journal/.+$`)
                .test(request.nextUrl?.pathname);


            // ONLY ADMIN CAN ACCESS ADMIN PANEL
            if (isOnAdminPanel && !user?.isAdmin) {
                return NextResponse.redirect(new URL("/login", request.nextUrl));
            }

            // ONLY AUTHENTICATED USERS CAN ACCESS THE DASHBOARD & PROFILE PAGES
            if (isOnDashboardPage && !user || isOnProfilePage && !user) {
                return NextResponse.redirect(new URL("/login", request.nextUrl));
            }

            // ONLY AUTHENTICATED USERS CAN ACCESS INDIVIDUAL JOURNAL PAGES
            if (isOnIndividualJournalPage && !user) {
                return NextResponse.redirect(new URL("/login", request.nextUrl));
            }

            // ONLY UNAUTHENTICATED CAN ACCESS LOGIN & REGISTER PAGES
            if ((isOnLoginPage && user) || (isOnRegisterPage && user)) {
                return NextResponse.redirect(new URL("/", request.nextUrl));
            }

            return true;
        }
    }
}