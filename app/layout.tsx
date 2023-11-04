import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';

import Footer from "@/components/Footer/Footer";
import Providers from "@/components/Providers";
import Modals from "@/components/Modal/Modals";
import { auth } from "@/lib/auth";
import { Session } from "next-auth";
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

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	const session: Session | null = await auth()

	return (
		<html lang="en">
			<Providers>
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
