import { ReactNode } from "react"

import { ICustomSession } from "@/types/types"

import IconUser from "@/components/Icons/IconUser"

interface Props {
    dropdownClass?: "dropdown-start" | "dropdown-end"
    user: ICustomSession["user"]
    children: ReactNode
}

function LoggedInButton({
    dropdownClass = "dropdown-end",
    user,
    children
}: Props) {

    return (
        <div className={`dropdown ${dropdownClass}`}>
            <div
                tabIndex={0}
                role="button"
                className="btn btn-success rounded-full tracking-wide text-secondary gap-1"
            >
                <span className="leading-none text-secondary text-lg p-0 m-0">
                    {user && (user?.firstName[0] + user?.lastName[0])}
                </span>

                <IconUser />
            </div>

            <ul tabIndex={0} className="dropdown-content z-20 menu p-5 gap-y-3 shadow bg-base-100 rounded-box border border-gray-800">
               {children}
            </ul>
        </div>
    )
}

export default LoggedInButton