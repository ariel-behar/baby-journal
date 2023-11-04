import Link from "next/link"
import UserNavLinks from "./UserNavLinks"
import { auth } from "@/lib/auth";

import { ICustomSession } from "@/types/types";
import { Session } from "next-auth";

import MainNavLinks from "./MainNavLinks";

async function Navbar() {
	const session: Session | null = await auth();
	const user: ICustomSession["user"] = (session as ICustomSession)?.user

	return (
		<nav className="h-[100px] flex flex-row justify-between items-center px-3 sm:px-5 lg:px-[50px] lg:container mx-auto border-b-[1px] border-gray-800">
			<Link href="/" className="text-3xl font-bold">Logo</Link>

			<MainNavLinks />

			<UserNavLinks user={user} />

		</nav>
	)
}

export default Navbar