import { IPost } from "@/models/Post";

import { getPost } from "@/lib/getPostData";
import BlogPost from "@/components/Blog/BlogPost";

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
		<>
			{post && (
				<BlogPost post={post} />
			)}
		</>
	)
}

export default SingleBlogPostPage