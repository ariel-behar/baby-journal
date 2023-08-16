import Image from "next/image"

function ContactPage() {
	return (
		<div className="flex gap-[100px]">
			<div className="flex-1 relative h-[500px]">
				<Image src="/img/contact.png" alt="Contact" fill className="object-contain" />
			</div>

			<div className="flex-1">
				<form action="" className="flex flex-col gap-5">
					<input type="text" placeholder="Name and Surname" className="form-input" />
					<input type="email" placeholder="Email Address" className="form-input" />
					<input type="text" placeholder="Phone Number (Optional)" className="form-input" />
					<textarea name="" id="" cols={30} rows={10} placeholder="Message" className="form-input"></textarea>

					<button className="p-5 bg-customBlue text-light font-bold border-none rounded-md">Send</button>
				</form>
			</div>
		</div>
	)
}

export default ContactPage