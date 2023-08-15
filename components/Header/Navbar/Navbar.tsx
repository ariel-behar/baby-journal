import NavLinks from "./NavLinks/NavLinks"

function Navbar() {

	return (
		<header className="h-[100px] flex flex-row justify-between items-center">
			<div className="text-3xl font-bold">Logo</div>
			<NavLinks />
		</header>
	)
}

export default Navbar