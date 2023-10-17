import { Suspense } from "react"

import AdminUsers from "@/components/Admin/AdminUsers"
import AddUserModalButton from "@/components/Buttons/AddUserModalButton"

function AdminUsersPage() {
    return (
        <>
            <div className="flex justify-end mb-3">
                <AddUserModalButton />
            </div>
            
            <Suspense fallback={<div>Loading...</div>}>
                <AdminUsers />
            </Suspense>
        </>

    )
}

export default AdminUsersPage