import uniqid from "uniqid"
import { auth } from "@/lib/auth"
import { Session } from "next-auth"

import { getPosts } from "@/lib/getPostData"

import { IPostPopulated } from "@/models/Post"

import TableDataPost from "../Table/TableDataPost"
import TableWrapper from "../Table/TableWrapper"
import TableRow from "../Table/TableRow"

async function DashboardPosts() {
	const session: Session | null = await auth()
	const posts = await getPosts(true, session?.user?.id as string) as IPostPopulated[]

	return (
		<>
			<TableWrapper>
				{posts.map((post, index) => (
					<TableRow index={index} key={uniqid()}>
						<TableDataPost  post={post} session={session} />
					</TableRow>
				))}
			</TableWrapper>
		</>
	)
}

export default DashboardPosts