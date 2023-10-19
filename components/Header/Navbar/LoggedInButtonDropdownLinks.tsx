
import { ICustomSession } from "@/types/types"

import NavLink from "./NavLink"
import LogOutButton from "@/components/Buttons/LogOutButton"

interface Props {
    user: ICustomSession["user"]
}

function LoggedInButtonDropdownLinks({
    user
}: Props) {
    return (
        <>
            {/* Dashboard */}
            <NavLink title='Dashboard' path='/dashboard' />

            {/* Admin */}
            {user?.isAdmin && <NavLink title='Admin' path='/admin' />}

            {/* Logout */}
            <LogOutButton />
        </>
    )
}

export default LoggedInButtonDropdownLinks