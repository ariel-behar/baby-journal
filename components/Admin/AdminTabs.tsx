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

    return (
        <div role="tablist" className="tabs">
            <a role="tab" className={`tab ${activeTab === 0 ? 'tab-active' : ''}`} onClick={() => setActiveTab(0)}>
                Posts
            </a>
            <div className="tab-content">{posts}</div>

            <a role="tab" className={`tab ${activeTab === 1 ? 'tab-active' : ''}`} onClick={() => setActiveTab(1)}>
                Users
            </a>
            <div className="tab-content">{users}</div>

        </div>
    )
}

export default AdminTabs