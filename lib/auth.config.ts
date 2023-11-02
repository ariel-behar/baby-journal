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
            const user = auth?.user;
            const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
            const isOnDashboardPage = request.nextUrl?.pathname.startsWith("/dashboard");
            const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
            const isOnRegisterPage = request.nextUrl?.pathname.startsWith("/register");

            // ONLY ADMIN CAN ACCESS ADMIN PANEL
            if(isOnAdminPanel && !user?.isAdmin) {
                return false;
            }

            // ONLY AUTHENTICATED USERS CAN ACCESS DASHBOARD PAGE
            if(isOnDashboardPage && !user) {
                return false;
            }

            // ONLY UNAUTHENTICATED CAN ACCESS LOGIN & REGISTER PAGES
            if((isOnLoginPage && user) || (isOnRegisterPage && user)) {
                return Response.redirect(new URL("/", request.nextUrl));
            }

            return true;
        }
    }
}