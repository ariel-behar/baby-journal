import Image from "next/image"
import Link from "next/link"

function PostCard() {
	return (
		<div className="flex flex-col gap-5 mb-5">
			<div className="flex">
				<div className="w-[90%] h-[400px] relative">
					<Image className="object-cover" src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" alt='Post' fill />
				</div>

				<span className="text-xs rotate-[270deg] m-auto">01.01.2024</span>
			</div>
			<div>
				<h1 className="text-2xl mb-5 w-11/12">Title</h1>

				<p className="mb-5 font-light text-gray-400 w-11/12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur, ad quibusdam laboriosam magnam mollitia eius? Explicabo similique corrupti natus incidunt neque libero sint, quibusdam ex velit corporis quae veritatis.</p>

				<Link href="/blog/post" className="underline">READ MORE</Link>
			</div>
		</div>
	)
}

export default PostCard