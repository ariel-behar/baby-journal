import uniqid from "uniqid";

import { Metadata } from "next";

// import { getPosts } from "@/lib/getData";
import { IPost } from "@/models/Post";

import PostCard from "@/components/PostCard"

import { getPosts } from "@/lib/getData";

export const metadata: Metadata = {
	title: "Blog",
	description: "Blog page description",
};

async function BlogPage() {
	const posts: IPost[] = await getPosts();

	return (
		<div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-5 lg:gap-5">
			{
				posts.map((post) => (
					<PostCard {...post} key={uniqid()} />
				))
			}
		</div>
	)
}

export default BlogPage