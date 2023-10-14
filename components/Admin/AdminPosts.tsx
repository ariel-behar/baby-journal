import { auth } from "@/lib/auth";
import { Session } from "next-auth";
import uniqid from "uniqid";

import { getPosts } from "@/lib/getPostData"

import { IPostPopulated } from "@/models/Post";

import DashboardPost from "../Dashboard/DashboardPost";
import DashboardTableWrapper from "../Dashboard/DashboardTableWrapper";

async function AdminPosts() {
	const posts = await getPosts(true) as IPostPopulated[];
	const session: Session | null = await auth()

	return (
		<>
			<DashboardTableWrapper>
				{
					posts.map((post, index) => (
						<DashboardPost key={uniqid()} post={post} session={session} index={index} />
					))
				}
			</DashboardTableWrapper>
		</>
	)
}

export default AdminPosts