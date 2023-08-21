import { Metadata } from "next";

import { getPosts } from "@/lib/getData";
import { IPost } from "@/models/Post";

import PostCard from "@/components/PostCard"

export const metadata: Metadata = {
	title: "Blog",
	description: "Blog page description",
};

async function BlogPage() {
	const posts: IPost[] = await getPosts();

	return (
		<div className="flex flex-wrap">
			{
				posts.map((post) => (
					<div className="w-full sm:w-1/2 md:w-1/3" key={post._id}>
						<PostCard {...post} />
					</div>
				))
			}
		</div>
	)
}

export default BlogPage