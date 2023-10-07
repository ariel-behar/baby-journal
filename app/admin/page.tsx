import { Suspense } from "react"
import { Session } from "next-auth";

import { auth } from "@/lib/auth";

import AdminPosts from "@/components/Admin/AdminPosts"
import AdminUsers from "@/components/Admin/AdminUsers"
import AddEditPostForm from "@/components/Forms/AddEditPostForm";
import AddNewUserForm from "@/components/Forms/AddNewUserForm";
import FormStylesWrapper from "@/components/Forms/FormComponents/FormStylesWrapper";

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
						<FormStylesWrapper title="Add New Post">
							<AddEditPostForm userId={session?.user?.id as string} formType="add" />
						</FormStylesWrapper>
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
						<FormStylesWrapper title="Add New User">
							<AddNewUserForm />
						</FormStylesWrapper>
					</Suspense>
				</div>
			</div>
		</div>
	)
}

export default AdminPage