import Link from "next/link"
import { format } from "date-fns";

import Image from "next/image"

import { IPost } from "@/models/Post";
import IconChevronRight from "../Icons/IconChevronRight";

interface Props extends IPost { }

function BlogPostCard({
	...post
}: Props) {

	return (
		<div className="card w-full bg-dark-soft text-primary-content shadow-xl">
			<Link href={`/blog/${post._id}`}>
				<figure className="w-full h-[300px] relative rounded-t-xl">
					<Image className="object-cover transform hover:scale-105 duration-700" src={post.img} alt='Post' fill />
				</figure>
			</Link>

			<div className="card-body">
				<div className="flex flex-row justify-between items-center">
					<h4 className="card-title text-">
						<Link href={`/blog/${post._id}`}>
							{post.title}
						</Link>
					</h4>
					<span className="text-sm text-muted flex-g">
						{format(new Date(post.createdAt), "dd MMM yyyy")}
					</span>
				</div>

				<p className="text-ellipsis whitespace-nowrap overflow-hidden">{post.description}</p>

				<div className="card-actions justify-end mt-2">
					<Link href={`/blog/${post._id}`} className="btn btn-primary btn-sm btn-min-width uppercase">
						Read More
						<IconChevronRight />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default BlogPostCard