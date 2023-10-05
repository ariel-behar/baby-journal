import { getPosts } from "@/lib/getData"
import Image from "next/image";
import { auth } from "@/lib/auth";
import { Session } from "next-auth";
import { ICustomSession } from "../Header/Navbar/NavLinks";
import IconPencil from "../Icons/IconPencil";
import Link from "next/link";
import DeleteConfirmationModalButton from "../DeleteConfirmationModalButton";

async function AdminPosts() {
	const posts = await getPosts();
	const session: Session | null = await auth()

	return (
		<div className="container">
			<h3>Posts</h3>

			{posts.map((post) => (
				<div key={post._id} className="my-5 flex items-center justify-between gap-5">
					<Link href={`/blog/${post._id}`} className="flex items-center gap-5 hover:underline">
						<Image src={post.img || "/img/noavatar.png"} alt="" width={50} height={50} />
						<span className="hover:underline">{post.title}</span>
					</Link>

					{(session?.user?.id == post.userId || (session as ICustomSession).user?.isAdmin) && (
						<div>
							<button className="btn btn-sm btn-primary btn-outline border-none">
								<IconPencil sizeClassName="size-5" />
							</button>

							<DeleteConfirmationModalButton entity={post} entityType='post'/>
						</div>
					)}
				</div>
			))}

		</div>
	)
}

export default AdminPosts