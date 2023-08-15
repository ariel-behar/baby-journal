import NavLinks from "./NavLinks/NavLinks"

function Navbar() {

	return (
		<header className="h-[100px] flex flex-row justify-between items-center">
			<div className="text-3xl font-bold">Logo</div>
			<nav className='flex items-center gap-3'>
				<NavLinks />
			</nav>
		</header>
	)
}

export default Navbar