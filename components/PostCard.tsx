import Link from "next/link"
import Image from "next/image"

import { Post } from "@/models/Post";

interface Props extends Post {}

function PostCard({
	...post
}: Props) {
	return (
		<div className="flex flex-col gap-5 mb-5">
			<div className="flex">
				<div className="w-[90%] h-[400px] relative">
					<Image className="object-cover" src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" alt='Post' fill />
				</div>

				<span className="text-xs rotate-[270deg] m-auto">01.01.2024</span>
			</div>
			<div>
				<h1 className="text-2xl mb-5 w-11/12">{post.title}</h1>

				<p className="mb-5 font-light text-gray-400 w-11/12">{post.body}</p>

				<Link href={`/blog/post/${post.id}`} className="underline">READ MORE</Link>
			</div>
		</div>
	)
}

export default PostCard