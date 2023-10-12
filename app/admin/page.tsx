import { Suspense } from "react"
import { Session } from "next-auth";

import { auth } from "@/lib/auth";

import AdminPosts from "@/components/Admin/AdminPosts"
import AdminUsers from "@/components/Admin/AdminUsers"
import AddEditPostForm from "@/components/Forms/AddEditPostForm";
import AddNewUserForm from "@/components/Forms/AddNewUserForm";
import FormStylesWrapper from "@/components/Forms/FormComponents/FormStylesWrapper";
import AddPostModalButton from "@/components/Buttons/AddPostModalButton";
import AddUserModalButton from "@/components/Buttons/AddUserModalButton";

async function AdminPage() {
	const session: Session | null = await auth();

	return (
		<div className="container">
			<div className="grid grid-cols-2 gap-5">
				<div>
					<AddPostModalButton />
					<AddUserModalButton />
				</div>
			</div>
		</div>
	)
}

export default AdminPage