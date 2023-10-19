import { handleLogout } from '@/lib/serverActions'

import IconLogOut from '../Icons/IconLogOut'

function LogOutButton() {
    return (
        <form className="mx-auto" action={handleLogout}>
            <button className="btn btn-sm rounded-2xl px-2 py-1 flex justify-between text-light hover:bg-light hover:text-dark">
                Logout <IconLogOut />
            </button>
        </form>
    )
}

export default LogOutButton