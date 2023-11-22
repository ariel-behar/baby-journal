import { IPost } from "@/models/Post";

import { getPost } from "@/lib/getPostData";

import LinkButton from "@/components/Buttons/LinkButton";
import IconChevronLeft from "@/components/Icons/IconChevronLeft";
import JournalPost from "@/components/Journal/JournalPost";

interface Props {
	params: {
		postId: string
	}
}

export const generateMetadata = async ({ params }: Props) => {
	const { postId } = params;

	const post: IPost | null = await getPost(postId);

	return {
		title: post?.title,
		description: post?.description
	}
}

async function SingleJournalPostPage({ params }: Props) {
	const { postId } = params;

	const post: IPost | null = await getPost(postId);

	return (
		<section className="flex-grow px-2">
			<div className="flex justify-end mb-2">
				<LinkButton href="/journal">
					<IconChevronLeft />
					Back to Journal
				</LinkButton>
			</div>

			{post && (
				<JournalPost post={post} />
			)}
		</section>
	)
}

export default SingleJournalPostPage