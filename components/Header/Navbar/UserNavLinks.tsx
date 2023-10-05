import NavLink from './NavLink'

import { handleLogout } from '@/lib/serverActions';
import { Session, User } from 'next-auth';

export interface ICustomSession extends Session {
    user?: User & {
        isAdmin: boolean
    }
}

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
                            <NavLink title='Dashboard' path='/dashboard' />

                            {(session as ICustomSession).user?.isAdmin && <NavLink title='Admin' path='/admin' />}
                            
                            <form action={handleLogout}>
                                <button className='btn btn-md btn-secondary rounded-none'>Logout</button>
                            </form>
                        </>
                    )
                    : (
                        <>
                            <NavLink title='Register' path='/register' />
                            <NavLink title='Login' path='/login' />
                        </>
                    )
                }
            </div>
        </>
    )
}

export default UserNavLinks