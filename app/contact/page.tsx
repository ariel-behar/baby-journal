import { Metadata } from "next";
import Image from "next/image"

export const metadata: Metadata = {
	title: "Contact",
	description: "Contact page description",
};

function ContactPage() {
	return (
		<div className="flex flex-col md:flex-row gap-[100px]">
			<div className="md:flex-1 relative h-[500px]">
				<Image src="/img/contact.png" alt="Contact" fill className="object-contain" />
			</div>

			<div className="flex-1">
				<form action="" className="flex flex-col gap-5 bg-dark-soft p-3 text-center rounded-md">
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