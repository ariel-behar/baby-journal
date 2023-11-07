import type { Metadata } from "next";
import { Session } from "next-auth";
import { Inter } from "next/font/google";
import { getMessages } from "next-intl/server";

import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

import { auth } from "@/lib/auth";

import Footer from "@/components/Footer/Footer";
import Providers from "@/components/Providers";
import Modals from "@/components/Modal/Modals";
import Notification from "@/components/Notification/Notification";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: 'My Blog | Home',
		template: "My Blog | %s",

	},
	description: "Home page description",
};

interface Props {
	children: React.ReactNode;
	params: {
		locale: string;
	};
}

export default async function RootLayout({
	children,
	params: { locale }
}: Readonly<Props>) {
	const session: Session | null = await auth()
	const messages = await getMessages()

	return (
		<html lang={locale}>
			<Providers messages={messages}>
				<body className={`${inter.className} text-light min-h-screen flex flex-col justify-between`}>

					<Header />

					<main className="flex-grow lg:container mx-auto px-3 sm:px-5 py-5 lg:px-[50px] flex items-stretch">
						{children}
					</main>

					<Footer />

					<Notification />

					<Modals session={session} />
				</body>
			</Providers>
		</html>
	);
}
