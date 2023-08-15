import Image from "next/image";

export default function HomePage() {
	return (
		<div className="flex gap-[100px]">
			<div className="flex-1 flex flex-col gap-[50px]">
				<h1 className="text-8xl">Creative Thoughts Agency</h1>
				<p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repud iandae nulla asperiores repellat placeat facilis.</p>

				<div className="flex gap-5">
					<button className="p-5 min-w-[120px] cursor-pointer border-none rounded-md bg-customBlue text-light">Learn More</button>
					<button className="p-5 min-w-[120px] cursor-pointer border-none rounded-md bg-light text-dark">Contact</button>
				</div>

				<div className="h-[50px] w-[500px] relative grayscale">
					<Image src='/img/brands.png' alt="Brands" fill />
				</div>
			</div>

			<div className="flex-1 relative">
				<Image src='/img/hero.gif' alt="Hero" fill />
			</div>
		</div>
	);
}
