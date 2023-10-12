import { Suspense } from "react"

import AdminUsers from "@/components/Admin/AdminUsers"

function AdminUsersPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
        </Suspense>
    )
}

export default AdminUsersPage