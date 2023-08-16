import Link from "next/link"
import NavLinks from "./NavLinks"

function Navbar() {

	return (
		<header className="h-[100px] flex flex-row justify-between items-center px-3 lg:px-0">
			<Link href="/" className="text-3xl font-bold">Logo</Link>
			<NavLinks />
		</header>
	)
}

export default Navbar