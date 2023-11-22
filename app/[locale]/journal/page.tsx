import uniqid from "uniqid";

import { Metadata } from "next";

import { IPostPopulated } from "@/models/Post";
import { getPosts } from "@/lib/getPostData";

import { auth } from "@/lib/auth";
import { Session } from "next-auth";
import { ICustomSession } from "@/types/types";
import AddPostModalButton from "@/components/Buttons/AddPostModalButton";
import JournalPostCard from "@/components/Journal/JournalPostCard";

export const metadata: Metadata = {
	title: "Blog",
	description: "Explore the Baby Journal for insightful articles, tips, and stories from mothers around the world. Stay updated on parenting advice, baby milestones, and personal experiences to support and inspire your motherhood journey."
};

async function JournalPage() {
	const posts = await getPosts(true) as IPostPopulated[];
	const session: Session | null = await auth();
	const user: ICustomSession['user'] | undefined = (session as ICustomSession)?.user;

	return (
		<div className="flex-grow flex flex-col lg:h-[calc(100vh-250px)] lg:overflow-y-scroll px-3 sm:px-5">
			{
				user && (
					<div className="flex justify-end">
						<AddPostModalButton />
					</div>
				)
			}

			{
				posts.length > 0
					? <div className="py-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 gap-y-5 lg:gap-5">

						{
							posts.map((post) => (
								<JournalPostCard user={user} post={post} key={uniqid()} />
							))
						}

					</div >
					: <p className="text-2xl text-center">
						No posts have been created yet...
					</p>
			}
		</div>
	)
}

export default JournalPage