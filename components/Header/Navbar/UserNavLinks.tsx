import LoggedInButton from './LoggedInButton';
import NavLink from './NavLink'

import { ICustomSession } from '@/types/types';

interface Props {
    user: ICustomSession["user"]
}

function UserNavLinks({
    user
}: Props) {
    return (
        <>
            {/* Desktop Menu */}
            <div className='hidden md:flex items-center'>
                {user
                    ? <LoggedInButton user={user} />
                    : (
                        <>
                            {/* Register */}
                            <NavLink title='Register' path='/register' />

                            {/* Login */}
                            <NavLink title='Login' path='/login' />
                        </>
                    )}
            </div>
        </>
    )
}

export default UserNavLinks