import { auth } from "@/lib/auth"
import { getPosts } from "@/lib/getPostData"
import { Session } from "next-auth"
import uniqid from "uniqid"
import { IPost } from "@/models/Post"
import DashboardPost from "./DashboardPost"
import { IUser } from "@/models/User"
import AddPostModalButton from "../Buttons/AddPostModalButton"
import DashboardTableWrapper from "./DashboardTableWrapper"

async function DashboardPosts() {
	const session: Session | null = await auth()
	const posts = await getPosts(true, session?.user?.id as string) as (IPost & { userId: IUser })[]

	return (
		<div className="container">
			<div className="flex justify-between">
				<h3>Posts</h3>
				<AddPostModalButton />
			</div>

			<div className="overflow-x-auto">
				<DashboardTableWrapper>
					{posts.map((post) => (
						<DashboardPost key={uniqid()} post={post} session={session} />
					))}
				</DashboardTableWrapper>
			</div>
		</div>
	)
}

export default DashboardPosts