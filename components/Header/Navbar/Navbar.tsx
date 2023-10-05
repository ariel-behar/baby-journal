import Link from "next/link"
import UserNavLinks from "./UserNavLinks"
import { auth } from "@/lib/auth";

import { Session } from "next-auth";
import MainNavLinks from "./MainNavLinks";


async function Navbar() {
	const session: Session | null = await auth();

	return (
		<header>
			<nav className="h-[100px] flex flex-row justify-between items-center px-3 lg:px-0 ">
				<Link href="/" className="text-3xl font-bold">Logo</Link>

				<MainNavLinks />
				
				<UserNavLinks session={session} />
			</nav>
		</header>
	)
}

export default Navbar