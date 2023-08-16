import Image from "next/image"

function AboutPage() {
	return (
		<div className="flex gap-[100px]">
			<div className="flex-1 flex flex-col gap-[50px]">
				<h3 className="text-customBlue">About Agency</h3>

				<h2 className="text-[54px] font-bold leading-tight">We create digital ideas that are bigger, bolder, braver and better</h2>

				<p className="text-xl "> We create digital ideas that are bigger, bolder, braver, and better. We believe in good ideas, flexibility, and precision. Our team is the best consulting and finance solutions provider. We offer a wide range of web and software development services.</p>

				<div className="flex items-center justify-between">
					<div className="flex flex-col gap-2">
						<h3 className="text-customBlue text-2xl font-bold">10 K+</h3>
						<p>Year of experience</p>
					</div>
					<div>
						<h3 className="text-customBlue text-2xl font-bold">10 K+</h3>
						<p>Year of experience</p>
					</div>
					<div>
						<h3 className="text-customBlue text-2xl font-bold">10 K+</h3>
						<p>Year of experience</p>
					</div>
				</div>
			</div>

			<div className="flex-1 relative">
				<Image
					src="/img/about.png"
					alt="About Image"
					fill
					className="object-contain"
				/>
			</div>
		</div>
	)
}

export default AboutPage