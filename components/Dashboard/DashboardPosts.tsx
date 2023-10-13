import uniqid from "uniqid"
import { auth } from "@/lib/auth"
import { Session } from "next-auth"

import { getPosts } from "@/lib/getPostData"

import { IPost } from "@/models/Post"
import { IUser } from "@/models/User"

import DashboardPost from "./DashboardPost"
import DashboardTableWrapper from "./DashboardTableWrapper"

async function DashboardPosts() {
	const session: Session | null = await auth()
	const posts = await getPosts(true, session?.user?.id as string) as (IPost & { userId: IUser })[]

	return (
		<>
			<DashboardTableWrapper>
				{posts.map((post, index) => (
					<DashboardPost key={uniqid()} post={post} session={session} index={index} />
				))}
			</DashboardTableWrapper>
		</>
	)
}

export default DashboardPosts