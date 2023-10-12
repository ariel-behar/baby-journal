import { Suspense } from "react"

import AdminPosts from "@/components/Admin/AdminPosts"

function AdminPostsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AdminPosts />
        </Suspense>
    )
}

export default AdminPostsPage