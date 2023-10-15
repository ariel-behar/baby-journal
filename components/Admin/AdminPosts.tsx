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
			<TableWrapper tableHeadings={["", "Title", "Description", "Created At", "Author", "Username", "User Email", ""]}>
				{
					posts.map((post, index) => (
						<TableRow index={index} key={uniqid()}>
							<TableDataAdminPost post={post} session={session} />
						</TableRow>
					))
				}
			</TableWrapper>
		</>
	)
}

export default AdminPosts