import Image from "next/image";

import LinkButton from "@/components/Buttons/LinkButton";

export default function HomePage() {
	return (
		<div className="flex-grow flex flex-col md:flex-row gap-[100px] text-center md:text-left items-center">
			<section className="flex flex-col gap-[50px] items-center md:items-start">
				<h1 className="text-6xl md:text-8xl">Creative Thoughts Agency</h1>
				<p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repud iandae nulla asperiores repellat placeat facilis.</p>

				<div className="flex gap-5">
					<LinkButton href="/about" className="btn-lg btn-primary">
						Learn More
					</LinkButton>

					<LinkButton href="/contact" className="btn-lg btn-secondary">
						Contact
					</LinkButton>
				</div>

				<div className="h-[25px] sm:h-[35px] md:h-[50px] w-full md:w-[500px] relative grayscale">
					<Image src='/img/brands.png' alt="Brands" fill />
				</div>
			</section>

			<div className="h-full w-full relative">
				<Image src='/img/hero.gif' alt="Hero" fill unoptimized />
			</div>
		</div>
	);
}
