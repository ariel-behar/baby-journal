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
			<TableWrapper tableWrapperClasses="h-[calc(100vh-280px)]" tableHeadings={["", "Title", "Description", "Created At", "Author", ""]} tableClasses={posts.length > 0 ? "" : 'h-full'}>
				{posts.length > 0
					? posts.map((post, index) => (
						<TableRow index={index} key={uniqid()}>
							<TableDataPost post={post} session={session} />
						</TableRow>
					)) : (
						<TableRow index={0}>
							<td className="text-center h-full" colSpan={10}>
								<p className="text-2xl">
									You have not created any posts yet...
								</p>
							</td>
						</TableRow>
					)
				}
			</TableWrapper>
		</>
	)
}

export default DashboardPosts