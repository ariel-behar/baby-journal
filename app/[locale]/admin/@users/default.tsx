import { Suspense } from "react"

import AdminUsers from "@/components/Admin/AdminUsers"
import AddUserModalButton from "@/components/Buttons/AddUserModalButton"
import Loading from "@/components/Loading"

function DefaultAdminUsersPage() {
    return (
        <>
            <div className="flex justify-end my-3">
                <AddUserModalButton />
            </div>
            
            <Suspense fallback={<Loading />}>
                <AdminUsers />
            </Suspense>
        </>

    )
}

export default DefaultAdminUsersPage