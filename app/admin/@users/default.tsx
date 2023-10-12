import { Suspense } from "react"

import AdminUsers from "@/components/Admin/AdminUsers"

function DefaultAdminUsersPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <AdminUsers />
        </Suspense>
    )
}

export default DefaultAdminUsersPage