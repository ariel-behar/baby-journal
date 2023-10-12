import AdminPosts from "@/components/Admin/AdminPosts"
import { Suspense } from "react"

function DefaultAdminPostsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
        </Suspense>
    )
}

export default DefaultAdminPostsPage