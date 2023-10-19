import { handleLogout } from "@/lib/serverActions"

import { ICustomSession } from "@/types/types"

import NavLink from "./NavLink"
import IconLogOut from "@/components/Icons/IconLogOut"

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
            {user?.isAdmin && (
                <NavLink title='Admin' path='/admin' />
            )}

            {/* Logout */}
            <form className="mx-auto" action={handleLogout}>
                <button className="btn btn-sm px-0 flex justify-between text-white">
                    Logout <IconLogOut />
                </button>
            </form>
        </>
    )
}

export default LoggedInButtonDropdownLinks