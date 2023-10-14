import uniqid from "uniqid"
import { auth } from "@/lib/auth"
import { Session } from "next-auth"

import { getPosts } from "@/lib/getPostData"

import { IPostPopulated } from "@/models/Post"

import DashboardPost from "./DashboardPost"
import DashboardTableWrapper from "./DashboardTableWrapper"

async function DashboardPosts() {
	const session: Session | null = await auth()
	const posts = await getPosts(true, session?.user?.id as string) as IPostPopulated[]

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