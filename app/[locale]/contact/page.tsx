import ContactForm from "@/components/Forms/ContactForm";
import { Metadata } from "next";
import Image from "next/image"

export const metadata: Metadata = {
	title: "Contact",
	description: "Contact page description",
};

function ContactPage() {
	return (
		<div className="flex flex-col md:flex-row lg:gap-[100px] w-full justify-center items-center px-3 sm:px-5">
			<div className="relative w-1/2 h-[300px] lg:h-[90%] flex flex-row items-center">
				<Image
					src="/img/baby-open-arms.png"
					alt="Contact"
					fill
					className="object-contain"
				/>
			</div>

			<div className="h-full flex items-center flex-1">
				<ContactForm />
				
			</div>
		</div>
	)
}

export default ContactPage