import { Session } from "next-auth";
import uniqid from "uniqid";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

import { auth } from "@/lib/auth";

import { IPostPopulated } from "@/models/Post";
import { getPosts } from "@/lib/getPostData";
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
	const t = await getTranslations('Common')

	return (
		<section className="flex-grow flex flex-col lg:h-[calc(100vh-250px)] lg:overflow-y-scroll px-3 sm:px-5">
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

					</div>
					: <h4 className="text-center">
						{t('no-posts-have-been-created-yet')}
					</h4>
			}
		</section>
	)
}

export default JournalPage