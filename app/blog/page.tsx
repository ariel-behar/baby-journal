import uniqid from "uniqid";

import { Metadata } from "next";

import { IPostPopulated } from "@/models/Post";
import { getPosts } from "@/lib/getPostData";

import PostCard from "@/components/Blog/BlogPostCard"
import { auth } from "@/lib/auth";
import { Session } from "next-auth";
import { ICustomSession } from "@/types/types";


export const metadata: Metadata = {
	title: "Blog",
	description: "Blog page description",
};

async function BlogPage() {
	const posts = await getPosts(true) as IPostPopulated[];
	const session: Session | null = await auth();
	const user: ICustomSession['user'] | undefined = (session as ICustomSession)?.user;

	return (
		<div className="py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-5 lg:gap-5">
			{
				posts.map((post) => (
					<PostCard user={user} post={post} key={uniqid()}  />
				))
			}
		</div>
	)
}

export default BlogPage