import { Suspense } from "react"
import { Session } from "next-auth";

import { auth } from "@/lib/auth";

import AdminPostForm from "@/components/Admin/AdminPostForm"
import AdminPosts from "@/components/Admin/AdminPosts"
import AdminUserForm from "@/components/Admin/AdminUserForm"
import AdminUsers from "@/components/Admin/AdminUsers"

async function AdminPage() {
	const session: Session | null = await auth();

	return (
		<div className="container">
			<div className="grid grid-cols-2 gap-5">
				<div>
					<Suspense fallback={<div>Loading...</div>}>
						<AdminPosts />
					</Suspense>
				</div>

				<div>
					<AdminPostForm userId={session?.user?.id as string} />
				</div>
			</div>

			<div className="grid grid-cols-2 gap-5">
				<div>
					<Suspense fallback={<div>Loading...</div>}>
						<AdminUsers />
					</Suspense>
				</div>

				<div>
					<AdminUserForm />
				</div>
			</div>
		</div>
	)
}

export default AdminPage