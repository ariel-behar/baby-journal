import uniqid from "uniqid"

import { ICustomSession } from "@/types/types"

import NavLink from "./NavLink"
import LogOutButton from "@/components/Buttons/LogOutButton"

import { routesLoggedInUser } from "@/data/routes"

interface Props {
    user: ICustomSession["user"]
}

function LoggedInButtonDropdownLinks({
    user
}: Props) {
    return (
        <>
            {
                routesLoggedInUser.map((route) => {
                    if (route.path === '/admin' && !user?.isAdmin) {
                        return null
                    } else {
                        return <NavLink key={uniqid()} path={route.path} title={route.title} />
                    }
                })
            }

            {/* Logout */}
            <LogOutButton />
        </>
    )
}

export default LoggedInButtonDropdownLinks