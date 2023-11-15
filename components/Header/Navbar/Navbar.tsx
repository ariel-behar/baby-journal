import UserNavigationMenu from "./UserNavigationMenu"
import { auth } from "@/lib/auth";

import { ICustomSession } from "@/types/types";
import { Session } from "next-auth";

import DesktopMainNavigationMenu from "./DesktopMainNavigationMenu";
import MobileMainNavigationMenu from "./MobileMainNavigationMenu";

import { routesMain } from "@/data/routes"
import { Link } from "@/lib/i18nNavigation";

async function Navbar() {
	const session: Session | null = await auth();
	const user: ICustomSession["user"] = (session as ICustomSession)?.user

	return (
		<nav className="h-[100px] flex flex-row justify-between items-center px-3 sm:px-5 lg:px-[50px] lg:container mx-auto border-b-[1px] border-gray-800">

			<div className="h-[80px] md:h-full w-[90px] md:w-[110px] md:hover:w-[230px] transition-all duration-200 relative overflow-hidden py-1">
				<Link href="/" className="text-3xl font-bold h-full w-full">
					<img src="/img/baby-crawling-home.png" alt="Logo" className="w-full h-full object-cover" style={{ objectPosition: 0 }} />
				</Link>
			</div>

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