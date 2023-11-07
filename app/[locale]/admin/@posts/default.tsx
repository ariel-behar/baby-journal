import { Suspense } from "react"

import AdminPosts from "@/components/Admin/AdminPosts"
import AddPostModalButton from "@/components/Buttons/AddPostModalButton"

function DefaultAdminPostsPage() {
    return (
        <>
            <div className="flex justify-end mb-3">
                <AddPostModalButton />
            </div>

            <Suspense fallback={<div>Loading...</div>}>
                <AdminPosts />
            </Suspense>
        </>
    )
}

export default DefaultAdminPostsPage