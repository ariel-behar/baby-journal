import LoggedInButton from '../../Buttons/LoggedInButton';
import LoggedInButtonDropdownLinks from './LoggedInButtonDropdownLinks';
import NavLink from './NavLink'

import { ICustomSession } from '@/types/types';
import { routesAuth } from '@/data/routes';
import uniqid from 'uniqid';

interface Props {
    user: ICustomSession["user"]
    dropdownClass?: "dropdown-start" | "dropdown-end"
    toggleMenu?: () => void
}

function UserNavigationMenu({
    user,
    dropdownClass,
    toggleMenu
}: Props) {
    return (
        <>
            <div className='flex items-center'>
                {user
                    ? <LoggedInButton user={user} dropdownClass={dropdownClass}>
                        <LoggedInButtonDropdownLinks user={user} toggleMenu={toggleMenu} />
                    </LoggedInButton>
                    : routesAuth.map((route) => <NavLink key={uniqid()} path={route.path} title={route.title} toggleMenu={toggleMenu} />)
                }
            </div>
        </>
    )
}

export default UserNavigationMenu