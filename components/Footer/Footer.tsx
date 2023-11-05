

import FooterMenu from "./FooterMenu"
import FooterPoweredBy from "./FooterPoweredBy"



function Footer() {
	return (
		<footer className="px-3 sm:px-5 lg:px-[50px] lg:container mx-auto flex flex-col justify-center sm:flex-row sm:justify-between h-[100px] items-center text-gray-500 text-sm border-t-[1px] border-gray-800">
			<FooterPoweredBy />

			<FooterMenu />

			<div className="text-center">
				{new Date().getFullYear()} &copy; All Rights Reserved
			</div>

		</footer>
	)
}

export default Footer