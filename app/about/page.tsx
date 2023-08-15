import Image from "next/image"

function AboutPage() {
	return (
		<div>
			<div className="relative w-full h-[500px]" >
				<Image src="https://images.pexels.com/photos/22882440/pexels-photo-22882440/free-photo-of-copa-cozinha-04.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="About" fill />
			</div>
		</div>
	)
}

export default AboutPage