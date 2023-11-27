import { auth } from "@/lib/auth";
import { Session } from "next-auth";
import uniqid from "uniqid";

import { getPosts } from "@/lib/getPostData"

import { IPostPopulated } from "@/models/Post";

import TableWrapper from "../Table/TableWrapper";
import TableRow from "../Table/TableRow";
import TableDataAdminPost from "../Table/TableDataAdminPost";
import { getTranslations } from "next-intl/server";

async function AdminPosts() {
	const posts = await getPosts(true) as IPostPopulated[];
	const session: Session | null = await auth()
	const t = await getTranslations("Common")

	return (
		<>
			<TableWrapper tableWrapperClasses="h-[calc(100vh-350px)]" tableHeadings={["", "Title", "Description", "Created At", "Author", "User Email", "Post ID", ""]}>
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
									{t('no-posts-have-been-created-yet')}
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