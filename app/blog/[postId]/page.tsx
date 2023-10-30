import { IPost } from "@/models/Post";

import { getPost } from "@/lib/getPostData";

import BlogPost from "@/components/Blog/BlogPost";
import LinkButton from "@/components/Buttons/LinkButton";
import IconChevronLeft from "@/components/Icons/IconChevronLeft";

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

async function SingleBlogPostPage({ params }: Props) {
	const { postId } = params;

	const post: IPost | null = await getPost(postId);

	return (
		<div className="flex-grow">
			<div className="flex justify-end mb-2">
				<LinkButton href="/blog">
					<IconChevronLeft />
					Back to Blog
				</LinkButton>
			</div>

			{post && (
				<BlogPost post={post} />
			)}
		</div>
	)
}

export default SingleBlogPostPage