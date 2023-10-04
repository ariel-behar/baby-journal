import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Header/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Providers from "@/components/Providers";
import UserConfirmationModal from "@/components/Modal/UserConfirmationModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: 'My Blog | Home',
		template: "My Blog | %s",

	},
	description: "Home page description",
};

export default function RootLayout({
	children,
	modal
}: Readonly<{
	children: React.ReactNode;
	modal: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<Providers>
				<body className={`${inter.className} text-light`}>
					<div className="lg:container px-3 sm:px-5 lg:px-[50px] mx-auto min-h-screen flex flex-col justify-between">
						<Navbar />
						<main>
							{children}
						</main>
						<Footer />
					</div>
					<UserConfirmationModal />
				</body>
			</Providers>
		</html>
	);
}
