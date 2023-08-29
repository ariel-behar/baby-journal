import { getPosts } from "@/lib/getData"
import { deletePost } from "@/lib/serverActions";
import Image from "next/image";

async function AdminPosts() {
	const posts = await getPosts();

	return (
		<div className="container">
			<h3>Posts</h3>
			{posts.map((post) => (
				<div key={post._id} className="my-5 flex items-center justify-between gap-5">
					<div className="flex items-center gap-5">
						<Image src={post.img || "/img/noavatar.png"} alt="" width={50} height={50} />
						<span>{post.title}</span>
					</div>

					<form action={deletePost}>
						<input type="hidden" name="postId" value={JSON.parse(JSON.stringify(post._id))} />
						<button className="btn btn-sm btn-error ">Delete</button>
					</form>
				</div>
			))}

		</div>
	)
}

export default AdminPosts