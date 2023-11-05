
import Image from "next/image"
import FooterMenu from "./FooterMenu"



function Footer() {
	return (
		<footer className="px-3 sm:px-5 lg:px-[50px] lg:container mx-auto flex flex-col justify-center sm:flex-row sm:justify-between h-[100px] items-center text-gray-500 text-sm border-t-[1px] border-gray-800">

			<div className="mb-1 sm:mb-0 flex flex-row">
				<span >
					Powered by&nbsp;
					<a href="https://www.arielbehar.com" className="font-bold mr-2 underline">
						Ariel Behar
					</a>
				</span>
				<Image src="/img/logo/arielbehar-logo.png" width={20} height={20} alt="Ariel Behar Logo" />
			</div>

			<div>
				<FooterMenu />
			</div>

			<div className="text-center">
				{new Date().getFullYear()} &copy; All Rights Reserved
			</div>

		</footer>
	)
}

export default Footer