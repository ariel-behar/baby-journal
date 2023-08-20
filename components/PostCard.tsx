import Link from "next/link"
import Image from "next/image"

import { IPost } from "@/models/Post";

interface Props extends IPost {}

function PostCard({
	...post
}: Props) {
	return (
		<div className="flex flex-col gap-5 mb-5">
			<div className="flex">
				<div className="w-[90%] h-[400px] relative">
					<Image className="object-cover" src={post.img} alt='Post' fill />
				</div>

				<span className="text-xs rotate-[270deg] m-auto text-nowrap">{post.createdAt.toString().slice(4,16)}</span>
			</div>
			<div>
				<h1 className="text-2xl mb-5 w-11/12">{post.title}</h1>

				<p className="mb-5 font-light text-gray-400 w-11/12">{post.description}</p>

				<Link href={`/blog/${post._id}`} className="underline">READ MORE</Link>
			</div>
		</div>
	)
}

export default PostCard