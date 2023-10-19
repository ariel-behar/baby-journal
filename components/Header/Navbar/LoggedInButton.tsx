import IconUser from "@/components/Icons/IconUser"
import { ICustomSession } from "@/types/types"
import NavLink from "./NavLink"
import { handleLogout } from "@/lib/serverActions"
import IconLogOut from "@/components/Icons/IconLogOut"

interface Props {
    user: ICustomSession["user"]
}

function LoggedInButton({
    user
}: Props) {

    return (
        <div className="dropdown dropdown-end">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-success rounded-full tracking-wide text-secondary gap-1"
            >
                <span className="leading-none text-secondary text-lg p-0 m-0">
                    {user && (user?.firstName[0] + user?.lastName[0])}
                </span>

                <IconUser sizeClassName="size-5" />
            </div>

            <ul tabIndex={0} className="dropdown-content z-20 menu p-5 gap-y-3 shadow bg-base-100 rounded-box border border-gray-800">
                <>
                    {/* Dashboard */}
                    <NavLink title='Dashboard' path='/dashboard' />

                    {/* Admin */}
                    {user?.isAdmin && (
                        <NavLink title='Admin' path='/admin' />
                    )}

                    {/* Logout */}
                    <form className="mx-auto" action={handleLogout}>
                        <button className="btn btn-sm px-0 flex justify-between text-white">Logout <IconLogOut /></button>
                    </form>


                </>
            </ul>
        </div>
    )
}

export default LoggedInButton