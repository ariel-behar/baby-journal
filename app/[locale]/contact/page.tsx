import Image from "next/image"
import ContactForm from "@/components/Forms/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description: "Baby Journal would love to hear from you. Whether you have questions, feedback, or just want to share your baby's milestones, we're here to help. Fill out the form below, and we'll get back to you as soon as possible.",
}

function ContactPage() {
	return (
		<section className="flex flex-col sm:flex-row gap-3 lg:gap-[100px] w-full justify-center items-center px-3 sm:px-5 pb-5 pb-sm-0">

			<article className="w-full sm:w-1/2">
				<div className="flex flex-col gap-7">
					<h3 className="text-3xl lg:text-4xl xl:text-6xl text-center">Get in Touch with Us!</h3>

					<p>We'd love to hear from you. Whether you have questions, feedback, or just want to share your baby's milestones, we're here to help. Fill out the form below, and we'll get back to you as soon as possible.</p>
				</div>

				<div className="flex flex-row items-center sm:flex-col sm:mt-7">
					<p>Thank you for being a part of our baby journal community!</p>
					
					<figure className="relative w-full h-[150px] sm:h-[300px] flex flex-row items-center">
						<Image
							src="/img/baby-open-arms.png"
							alt="Contact"
							fill
							className="object-contain"
						/>
					</figure>
				</div>
			</article>

			<div className="h-full w-full flex items-center flex-1">
				<ContactForm />

			</div>
		</section>
	)
}

export default ContactPage