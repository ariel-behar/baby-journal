import LoggedInButton from '../../Buttons/LoggedInButton';
import LoggedInButtonDropdownLinks from './LoggedInButtonDropdownLinks';
import NavLink from './NavLink'

import { ICustomSession } from '@/types/types';
import { routesAuth } from '@/data/routes';
import uniqid from 'uniqid';

interface Props {
    user: ICustomSession["user"]
}

function UserNavigationMenu({
    user
}: Props) {
    return (
        <>
            <div className='flex items-center'>
                {user
                    ? <LoggedInButton user={user}>
                        <LoggedInButtonDropdownLinks user={user} />
                    </LoggedInButton>
                    : routesAuth.map((route) => <NavLink key={uniqid()} path={route.path} title={route.title} />)
                }
            </div>
        </>
    )
}

export default UserNavigationMenu