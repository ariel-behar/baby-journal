import { Suspense } from "react"

import AdminPosts from "@/components/Admin/AdminPosts"
import AddPostModalButton from "@/components/Buttons/AddPostModalButton"

function AdminPostsPage() {
    return (
        <>
            <div className="flex justify-between">
                <h3>Posts</h3>
                <AddPostModalButton />
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                <AdminPosts />
            </Suspense>
        </>
    )
}

export default AdminPostsPage