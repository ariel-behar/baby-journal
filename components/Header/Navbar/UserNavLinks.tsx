import NavLink from './NavLink'

import { handleLogout } from '@/lib/serverActions';
import { ICustomSession } from '@/types/types';
import { Session } from 'next-auth';

interface Props {
    session: Session | null
}

function UserNavLinks({
    session
}: Props) {
    return (
        <>
            {/* Desktop Menu */}
            <div className='hidden md:flex items-center'>
                {session?.user
                    ? (
                        <>
                            {/* Dashboard */}
                            <NavLink title='Dashboard' path='/dashboard' />

                            {/* Admin */}
                            {(session as ICustomSession).user?.isAdmin && <NavLink title='Admin' path='/admin' />}

                            {/* Logout */}
                            <form action={handleLogout}>
                                <button className='btn btn-md btn-secondary rounded-none'>Logout</button>
                            </form>
                        </>
                    )
                    : (
                        <>
                            {/* Register */}
                            <NavLink title='Register' path='/register' />

                            {/* Login */}
                            <NavLink title='Login' path='/login' />
                        </>
                    )
                }
            </div>
        </>
    )
}

export default UserNavLinks