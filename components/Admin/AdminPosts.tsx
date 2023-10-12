import { getPosts } from "@/lib/getPostData"
import { auth } from "@/lib/auth";
import { Session } from "next-auth";
import DashboardPost from "../Dashboard/DashboardPost";
import uniqid from "uniqid";

async function AdminPosts() {
	const posts = await getPosts();
	const session: Session | null = await auth()

	return (
		<div className="container">
			{posts.map((post) => (
				<DashboardPost key={uniqid()} post={post} session={session} />
			))}
		</div>
	)
}

export default AdminPosts