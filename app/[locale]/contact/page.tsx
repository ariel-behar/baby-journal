import { Metadata } from "next";
import Image from "next/image"

export const metadata: Metadata = {
	title: "Contact",
	description: "Contact page description",
};

function ContactPage() {
	return (
		<div className="flex flex-col md:flex-row gap-[100px] w-full justify-center items-center px-3 sm:px-5">
			<div className="relative w-1/2 h-[90%] flex flex-row items-center">
				<Image
					src="/img/baby-open-arms.png"
					alt="Contact"
					fill
					className="object-contain"
				/>
			</div>

			<div className="h-full flex items-center flex-1">
				<form action="" className="flex flex-col gap-5 bg-dark-soft p-3 text-center rounded-md w-full">
					<input type="text" placeholder="Name and Surname" className="form-input" />
					<input type="email" placeholder="Email Address" className="form-input" />
					<input type="text" placeholder="Phone Number (Optional)" className="form-input" />
					<textarea name="" id="" cols={30} rows={10} placeholder="Message" className="form-input"></textarea>

					<button className="btn btn-lg btn-primary">Send</button>
				</form>
			</div>
		</div>
	)
}

export default ContactPage