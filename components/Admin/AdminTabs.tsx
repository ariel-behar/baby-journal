"use client"
import { useTranslations } from "next-intl"
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
    const t = useTranslations('Common')

    return (<>
        <div className="flex justify-center items-center">
            <button
                className={`flex-grow btn btn-primary btn-sm md:btn-lg rounded-none uppercase ${activeTab === 0 ? 'text-lg md:text-xl' : 'btn-ghost border-b-gray-800'}`}
                onClick={() => setActiveTab(0)} >
                {t('posts')}
            </button>
            <button
                className={`flex-grow btn btn-primary btn-sm md:btn-lg rounded-none uppercase ${activeTab === 1 ? 'text-lg md:text-xl' : 'btn-ghost border-b-gray-800'}`}
                onClick={() => setActiveTab(1)}
            >
                {t('users')}
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