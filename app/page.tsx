import Image from "next/image";

export default function HomePage() {
	return (
		<div className="flex flex-col md:flex-row gap-[100px] text-center md:text-left">
			<div className="flex-1 flex flex-col gap-[50px] items-center md:items-start">
				<h1 className="text-6xl md:text-8xl">Creative Thoughts Agency</h1>
				<p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repud iandae nulla asperiores repellat placeat facilis.</p>

				<div className="flex gap-5">
					<button className="blue-button">Learn More</button>
					<button className="gray-button">Contact</button>
				</div>

				<div className="h-[25px] sm:h-[35px] md:h-[50px] w-full md:w-[500px] relative grayscale">
					<Image src='/img/brands.png' alt="Brands" fill />
				</div>
			</div>

			<div className="md:flex-1 relative">
				<Image src='/img/hero.gif' alt="Hero" fill unoptimized />
			</div>
		</div>
	);
}
