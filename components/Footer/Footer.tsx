import LanguageSelector from "../LanguageSelector"
import FooterAllRightsReserved from "./FooterAllRightsReserved"
import FooterMenu from "./FooterMenu"
import FooterPoweredBy from "./FooterPoweredBy"

function Footer() {
	return (
		<footer className="px-3 gap-y-1 lg:gap-y-0 lg:px-[50px] lg:container mx-auto flex flex-col justify-center lg:flex-row lg:justify-between h-[100px] items-center text-sm border-t-[1px] border-gray-800 ">

			<FooterPoweredBy />

			<div className="flex flex-row items-center gap-x-5 order-1 lg:order-2 mb-2 sm:mb-0">
				<FooterMenu />
				<LanguageSelector />
			</div>

			<FooterAllRightsReserved />
		</footer>
	)
}

export default Footer