"use client"
import { ReactNode, useState } from "react"

type Props = Readonly<{
    posts: ReactNode,
    users: ReactNode,
}>

function AdminTabs({
    posts,
    users
}: Props) {
    const [activeTab, setActiveTab] = useState(0)

    return (<>
        <div className="flex justify-center items-center">
            <button
                className={`flex-grow btn btn-primary rounded-none uppercase ${activeTab === 0 ? 'text-xl' : 'btn-ghost border-b-gray-800'}`}
                onClick={() => setActiveTab(0)} >
                Posts
            </button>
            <button
                className={`flex-grow btn btn-primary rounded-none uppercase ${activeTab === 1 ? 'text-xl' : 'btn-ghost border-b-gray-800'}`}
                onClick={() => setActiveTab(1)}
            >
                Users
            </button >
        </div >

        <div>
            {activeTab === 0 && posts}
            {activeTab === 1 && users}
        </div>
    </>
    )
}

export default AdminTabs