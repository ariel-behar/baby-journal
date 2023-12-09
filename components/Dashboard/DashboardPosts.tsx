import uniqid from "uniqid"
import { auth } from "@/lib/auth"
import { Session } from "next-auth"
import { getTranslations } from "next-intl/server"

import { getPosts } from "@/lib/getPostData"

import { IPostPopulated } from "@/models/Post"

import TableDataPost from "../Table/TableDataPost"
import TableWrapper from "../Table/TableWrapper"
import TableRow from "../Table/TableRow"

async function DashboardPosts() {
	const session: Session | null = await auth()
	const posts = await getPosts(true, true, session?.user?.id as string) as IPostPopulated[]
	const t = await getTranslations("Common")

	return (
		<>
			<TableWrapper tableWrapperClasses="h-[calc(100vh-230px)]" tableHeadings={["", t('title'), t('description'), t('created-at'), t('author'), ""]} tableClasses={posts.length > 0 ? "" : 'h-full'}>
				{posts.length > 0
					? posts.map((post, index) => (
						<TableRow index={index} key={uniqid()}>
							<TableDataPost post={post} session={session} />
						</TableRow>
					)) : (
						<TableRow index={0}>
							<td className="text-center h-full" colSpan={10}>
								<h4>
									{t('you-have-not-created-any-posts-yet')}
								</h4>
							</td>
						</TableRow>
					)
				}
			</TableWrapper>
		</>
	)
}

export default DashboardPosts