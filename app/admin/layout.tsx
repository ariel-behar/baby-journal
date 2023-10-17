import AdminTabs from "@/components/Admin/AdminTabs"

import { ReactNode } from "react"

type Props = Readonly<{
    children: ReactNode,
    posts: ReactNode,
    users: ReactNode,
}>

function AdminLayout({
    children,
    posts,
    users
}: Props) {
    return (
        <>
            <AdminTabs posts={posts} users={users} />

            {children}
        </>
    )
}

export default AdminLayout