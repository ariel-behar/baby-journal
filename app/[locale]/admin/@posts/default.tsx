import { Suspense } from "react"

import AdminPosts from "@/components/Admin/AdminPosts"
import AddPostModalButton from "@/components/Buttons/AddPostModalButton"
import Loading from "@/components/Loading"

function DefaultAdminPostsPage() {
    return (
        <>
            <div className="flex justify-end my-3">
                <AddPostModalButton />
            </div>

            <Suspense fallback={<Loading />}>
                <AdminPosts />
            </Suspense>
        </>
    )
}

export default DefaultAdminPostsPage