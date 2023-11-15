import uniqid from "uniqid"

import { ICustomSession } from "@/types/types"

import NavLink from "./NavLink"
import LogOutButton from "@/components/Buttons/LogOutButton"

import { routesLoggedInUser } from "@/data/routes"

interface Props {
    user: ICustomSession["user"],
    toggleMenu?: () => void
}

function LoggedInButtonDropdownLinks({
    user,
    toggleMenu
}: Props) {
    return (
        <>
            {
                routesLoggedInUser.map((route) => {
                    if (route.path === '/admin' && !user?.isAdmin) {
                        return null
                    } else {
                        return <NavLink key={uniqid()} path={route.path} title={route.title} toggleMenu={toggleMenu} />
                    }
                })
            }

            {/* Logout */}
            <LogOutButton />
        </>
    )
}

export default LoggedInButtonDropdownLinks