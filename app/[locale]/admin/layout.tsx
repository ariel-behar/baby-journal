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
        <div className="flex-grow flex flex-col w-screen px-3 sm:px-5">
            <AdminTabs posts={posts} users={users} />

            {children}
        </div>
    )
}

export default AdminLayout