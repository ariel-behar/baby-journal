import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Header/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Providers from "@/components/Providers";
import Modals from "@/components/Modal/Modals";
import { auth } from "@/lib/auth";
import { Session } from "next-auth";

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
	modal
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	const session:Session | null = await auth()

	return (
		<html lang="en">
			<Providers>
				<body className={`${inter.className} text-light min-h-screen flex flex-col justify-between`}>

					<Navbar />

					<main className="flex-grow lg:container mx-auto px-3 sm:px-5 lg:px-[50px]">
						{children}
					</main>

					<Footer />

					<Modals session={session} />
				</body>
			</Providers>
		</html>
	);
}
