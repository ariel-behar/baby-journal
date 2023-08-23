import Link from "next/link"
import NavLinks from "./NavLinks"
import { auth } from "@/lib/auth";

import { Session } from "next-auth";


async function Navbar() {
    const session: Session | null = await auth();

	return (
		<header className="h-[100px] flex flex-row justify-between items-center px-3 lg:px-0">
			<Link href="/" className="text-3xl font-bold">Logo</Link>
			<NavLinks session={session}/>
		</header>
	)
}

export default Navbar