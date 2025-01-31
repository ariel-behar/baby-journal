import { Metadata } from "next";
import AdminTabs from "@/components/Admin/AdminTabs"

import { ReactNode } from "react"

export const metadata: Metadata = {
	title: "Admin",
	description: "Access the Baby Journal Admin Page to manage user accounts, oversee content, and ensure a smooth experience for all users. Administer settings, monitor activity, and maintain the integrity of the community."
};

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