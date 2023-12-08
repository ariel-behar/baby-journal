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
			<TableWrapper tableWrapperClasses="h-[calc(100vh-350px)]" tableHeadings={["", t('title'), t('description'), t('created-at'), t('author'), t('user-email'), t('post-id'), ""]}>
				{posts.length > 0
					? posts.map((post, index) => (
						<TableRow index={index} key={uniqid()}>
							<TableDataAdminPost post={post} session={session} />
						</TableRow>
					))
					: (
						<TableRow index={0}>
							<td className="text-center h-full" colSpan={10}>
								<h4>
									{t('no-posts-have-been-created-yet')}
								</h4>
							</td>
						</TableRow>
					)
				}
			</TableWrapper>
		</>
	)
}

export default AdminPosts