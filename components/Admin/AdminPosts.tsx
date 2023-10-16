import { auth } from "@/lib/auth";
import { Session } from "next-auth";
import uniqid from "uniqid";

import { getPosts } from "@/lib/getPostData"

import { IPostPopulated } from "@/models/Post";

import TableWrapper from "../Table/TableWrapper";
import TableRow from "../Table/TableRow";
import TableDataAdminPost from "../Table/TableDataAdminPost";

async function AdminPosts() {
	const posts = await getPosts(true) as IPostPopulated[];
	const session: Session | null = await auth()

	return (
		<>
			<TableWrapper tableHeadings={["", "Title", "Description", "Created At", "Author", "Username", "User Email", "Post ID", ""]}>
				{posts.length > 0
					? posts.map((post, index) => (
						<TableRow index={index} key={uniqid()}>
							<TableDataAdminPost post={post} session={session} />
						</TableRow>
					))
					: (
						<TableRow index={0}>
							<td className="text-center h-full" colSpan={10}>
								<p className="text-2xl">
									No posts have been created yet...
								</p>
							</td>
						</TableRow>
					)
				}
			</TableWrapper>
		</>
	)
}

export default AdminPosts