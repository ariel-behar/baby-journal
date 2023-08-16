import Image from "next/image"

function SinglePostPage() {
	return (
		<div className="flex gap-[100px]">
			<div className="hidden md:block flex-1 relative h-[calc(100vh-200px)]">
				<Image src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" alt='Post' fill className="object-cover" />
			</div>

			<div className="flex-[2] flex flex-col gap-[50px]">
				<h1 className="text-[64px]">Title</h1>

				<div className="relative flex gap-[20px]">
					<Image src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" alt='User image' width={50} height={50} className="object-cover rounded-[50%] h-[50px] w-[50px]" />

					<div className="flex flex-col gap-[10px]">
						<span className="text-gray-500 font-bold">Author</span>
						<span className="font-medium">Terry Jefferson</span>
					</div>
					<div className="flex flex-col gap-[10px]">
						<span className="text-gray-500 font-bold">Published </span>
						<span className="font-medium">01.01.2024s</span>
					</div>
				</div>

				<div>
					<p className="text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos vel aliquid pariatur libero, soluta veritatis, reprehenderit in possimus nostrum eos odit dolorem doloribus earum? Ipsa ratione sit nostrum repudiandae dolorem.
					</p>
				</div>
			</div>
		</div>
	)
}

export default SinglePostPage