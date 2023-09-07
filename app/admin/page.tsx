import { Suspense } from "react"
import { Session } from "next-auth";

import { auth } from "@/lib/auth";

import AdminPosts from "@/components/Admin/AdminPosts"
import AdminUsers from "@/components/Admin/AdminUsers"
import AddNewPostForm from "@/components/Forms/AddNewPostForm";
import AddNewUserForm from "@/components/Forms/AddNewUserForm";

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
					<Suspense fallback={<div>Loading...</div>}>
						<AddNewPostForm userId={session?.user?.id as string} />
					</Suspense>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-5">
				<div>
					<Suspense fallback={<div>Loading...</div>}>
						<AdminUsers />
					</Suspense>
				</div>

				<div>
					<Suspense fallback={<div>Loading...</div>}>
						<AddNewUserForm />
					</Suspense>
				</div>
			</div>
		</div>
	)
}

export default AdminPage