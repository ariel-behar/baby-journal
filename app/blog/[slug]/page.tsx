import { Suspense } from "react";
import Image from "next/image"

import { IPost } from "@/models/Post";

import PostUser from "@/components/PostUser";

import { getPost } from "@/lib/getData";

interface Props {
	params: {
		slug: string
	}
}

async function SinglePostPage({ params }: Props) {
	const { slug } = params;

	const post = await getPost(Number(slug)) as IPost;

	return (
		<div className="flex gap-[100px]">
			<div className="hidden md:block flex-1 relative h-[calc(100vh-200px)]">
				<Image src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" alt='Post' fill className="object-cover" />
			</div>

			<div className="flex-[2] flex flex-col gap-[50px]">
				<h1 className="text-[64px]">{post.title}</h1>

				<div className="relative flex gap-[20px]">
					<Image src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg" alt='User image' width={50} height={50} className="object-cover rounded-[50%] h-[50px] w-[50px]" />

					<Suspense fallback={<div>Loading...</div>}>
						<PostUser userId={post.userId} />
					</Suspense>

					<div className="flex flex-col gap-[10px]">
						<span className="text-gray-500 font-bold">Published </span>
						<span className="font-medium">01.01.2024s</span>
					</div>
				</div>

				<div>
					<p className="text-xl">
						{post.body}
					</p>
				</div>
			</div>
		</div>
	)
}

export default SinglePostPage