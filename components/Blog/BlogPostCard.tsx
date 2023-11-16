import Image from "next/image"
import { Link } from "@/lib/i18nNavigation";
import { format } from "date-fns";

import { ICustomSession } from "@/types/types";
import { IPostPopulated } from "@/models/Post";

import IconChevronRight from "../Icons/IconChevronRight";
import LikeButton from "../Buttons/LikeButton";
import LikeCounter from "./LikeCounter";

interface Props {
	post: IPostPopulated,
	user: ICustomSession['user'] | undefined
}

function BlogPostCard({
	post,
	user
}: Props) {

	return (
		<div className="card w-full bg-dark-soft text-primary-content shadow-xl">
			<Link href={`/blog/${post._id}`}>
				<figure className="w-full h-[300px] relative rounded-t-xl">
					<Image className="object-cover transform hover:scale-105 duration-700" src={post.img} alt='Post' fill />
				</figure>
			</Link>

			<div className="card-body p-4 sm:p-8">
				<div className="flex flex-row justify-between items-start">
					<div>
						<h4 className="card-title ">
							<Link href={`/blog/${post._id}`}>
								{post.title}
							</Link>
						</h4>
						<span className="text-sm text-muted">
							by {post.user.firstName} {post.user.lastName}
						</span>
					</div>
					<span className="text-sm text-muted">
						{format(new Date(post.createdAt), "dd MMM yyyy")}
					</span>
				</div>

				<div className="card-actions justify-between items-center mt-2">
					<div className="flex flex-row items-center gap-2">
						{(user && user.id != post.user._id) && <LikeButton post={post} user={user} />}

						<LikeCounter likes={post.likes} />
					</div>

					<div className="flex flex-row justify-end w-full">
						<Link href={`/blog/${post._id}`} className="btn btn-primary btn-sm btn-min-width uppercase">
							Read More
							<IconChevronRight />
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BlogPostCard