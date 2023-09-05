import Link from "next/link"
import { format } from "date-fns";

import Image from "next/image"

import { IPost } from "@/models/Post";

interface Props extends IPost { }

function PostCard({
	...post
}: Props) {

	return (
		<div className="card w-full bg-dark-soft text-primary-content shadow-xl">
			<figure className="w-full h-[300px] relative">
				<Image className="object-cover" src={post.img} alt='Post' fill />
			</figure>

			<div className="card-body">
				<div className="flex flex-row justify-between items-center">
					<h4 className="card-title text-">
						{post.title}
					</h4>
					<span className="text-sm text-muted flex-g">
						{format(new Date(post.createdAt), "dd MMM yyyy")}
					</span>
				</div>

				<p className="text-ellipsis whitespace-nowrap overflow-hidden">{post.description}</p>

				<div className="card-actions justify-end mt-2">
					<Link href={`/blog/${post._id}`} className="btn btn-primary btn-sm">READ MORE</Link>
				</div>
			</div>
		</div>
	)
}

export default PostCard