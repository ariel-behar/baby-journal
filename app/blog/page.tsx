import PostCard from "@/components/PostCard"
import { Post } from "@/models/Post";

const getData = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', { next: {
		revalidate: 600
	}});

	if(!res.ok) {
		throw new Error('Something went wrong');
	}

	return res.json();
}

async function BlogPage() {
	const posts: Post[] = await getData();

	return (
		<div className="flex flex-wrap">
			{
				posts.map((post) => (
					<div className="w-full sm:w-1/2 md:w-1/3" key={post.id}>
						<PostCard {...post} />
					</div>
				))
			}
		</div>
	)
}

export default BlogPage