import { auth } from "@/lib/auth";
import { Session } from "next-auth";
import uniqid from "uniqid";

import { getPosts } from "@/lib/getPostData"

import { IPostPopulated } from "@/models/Post";

import TableDataPost from "../Table/TableDataPost";
import TableWrapper from "../Table/TableWrapper";
import TableRow from "../Table/TableRow";

async function AdminPosts() {
	const posts = await getPosts(true) as IPostPopulated[];
	const session: Session | null = await auth()

	return (
		<>
			<TableWrapper>
				{
					posts.map((post, index) => (
						<TableRow index={index} key={uniqid()}>
							<TableDataPost post={post} session={session} />
						</TableRow>
					))
				}
			</TableWrapper>
		</>
	)
}

export default AdminPosts