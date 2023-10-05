import { auth } from "@/lib/auth"
import { getPosts } from "@/lib/getPostData"
import { Session } from "next-auth"
import uniqid from "uniqid"
import { IPost } from "@/models/Post"
import DashboardPost from "./DashboardPost"

async function DashboardPosts() {
    const session: Session | null = await auth()
    const posts: IPost[] = await getPosts(session?.user?.id as string)

    return (
		<div className="container">
			<h3>Posts</h3>

			{posts.map((post) => (
				<DashboardPost key={uniqid()} post={post} session={session} />
			))}
		</div>
    )
}

export default DashboardPosts