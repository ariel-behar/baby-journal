import Link from "next/link"
import UserNavLinks from "./UserNavLinks"
import { auth } from "@/lib/auth";

import { ICustomSession } from "@/types/types";
import { Session } from "next-auth";

import DesktopNavigationMenu from "./DesktopNavigationMenu";
import MobileNavigationMenu from "./MobileNavigationMenu";

import { routes } from "@/data/routes"

async function Navbar() {
	const session: Session | null = await auth();
	const user: ICustomSession["user"] = (session as ICustomSession)?.user

	return (
		<nav className="h-[100px] flex flex-row justify-between items-center px-3 sm:px-5 lg:px-[50px] lg:container mx-auto border-b-[1px] border-gray-800">
			<Link href="/" className="text-3xl font-bold">Logo</Link>

			<div className='lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2'>
				<DesktopNavigationMenu routes={routes}/>
				
				<MobileNavigationMenu routes={routes}/>
			</div>

			<UserNavLinks user={user} />

		</nav>
	)
}

export default Navbar