import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Nabvar from "@/components/Header/Navbar/Nabvar";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Nabvar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
