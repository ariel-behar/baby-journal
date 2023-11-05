import Link from "next/link"
import UserNavigationMenu from "./UserNavigationMenu"
import { auth } from "@/lib/auth";

import { ICustomSession } from "@/types/types";
import { Session } from "next-auth";

import DesktopMainNavigationMenu from "./DesktopMainNavigationMenu";
import MobileMainNavigationMenu from "./MobileMainNavigationMenu";

import { routesMain } from "@/data/routes"

async function Navbar() {
	const session: Session | null = await auth();
	const user: ICustomSession["user"] = (session as ICustomSession)?.user

	return (
		<nav className="h-[100px] flex flex-row justify-between items-center px-3 sm:px-5 lg:px-[50px] lg:container mx-auto border-b-[1px] border-gray-800">
			<Link href="/" className="text-3xl font-bold">Logo</Link>

			<div className="flex gap-5 items-center">
				{/* Main Menu */}
				<div className='order-2 lg:order-1 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2'>
					<DesktopMainNavigationMenu routes={routesMain} />

					<MobileMainNavigationMenu routes={routesMain} />
				</div>

				{/* User Menu */}
				<div className="order-1 lg:order-2">
					<UserNavigationMenu user={user} />
				</div>

			</div>
		</nav>
	)
}

export default Navbar