import Link from "next/link"
import UserNavLinks from "./UserNavLinks"
import { auth } from "@/lib/auth";

import { Session } from "next-auth";
import MainNavLinks from "./MainNavLinks";


async function Navbar() {
	const session: Session | null = await auth();

	return (
		<header>
			<nav className="h-[100px] flex flex-row justify-between items-center px-3 sm:px-5 lg:px-[50px] lg:container mx-auto border-b-[1px] border-gray-800">
				<Link href="/" className="text-3xl font-bold">Logo</Link>

				<MainNavLinks />

				{
					<span className="text-secondary h-full">{session?.user?.email}</span>
				}
				
				<UserNavLinks session={session} />
			</nav>
		</header>
	)
}

export default Navbar