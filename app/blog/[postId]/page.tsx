import { Suspense } from "react";
import Image from "next/image"

import { IPost } from "@/models/Post";

import PostUser from "@/components/PostUser";

import { getPost } from "@/lib/getData";

interface Props {
	params: {
		postId: string
	}
}

async function SinglePostPage({ params }: Props) {
	const { postId } = params;

	const post: IPost | null = await getPost(postId);
	console.log('post:', post)

	return (
		<div className="flex gap-[100px]">
			{
				post && (
					<div className="hidden md:block flex-1 relative h-[calc(100vh-200px)]">
						<Image src={post.img} alt='Post' fill className="object-cover" />
					</div>
				)
			}

			<div className="flex-[2] flex flex-col gap-[50px]">
				<h1 className="text-[64px]">{post?.title}</h1>

				<div className="relative flex gap-[20px]">
					{
						post && (
							<Suspense fallback={<div>Loading...</div>}>
								<PostUser userId={post.userId} />
							</Suspense>
						)
					}
					<div className="flex flex-col gap-[10px]">
						<span className="text-gray-500 font-bold">Published</span>
						<span className="font-medium">{post?.createdAt.toString().slice(4,16)}</span>
					</div>
				</div>

				<div>
					<p className="text-xl">
						{post?.description}
					</p>
				</div>
			</div>
		</div>
	)
}

export default SinglePostPage