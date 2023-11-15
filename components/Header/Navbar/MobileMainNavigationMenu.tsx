"use client"
import { useState } from 'react';
import uniqid from "uniqid"

import { ICustomSession, IRoute } from '@/types/types';

import NavLink from "./NavLink"
import IconMenu from '@/components/Icons/IconMenu';
import IconClose from '@/components/Icons/IconClose';
import LanguageSelector from '@/components/LanguageSelector';
import UserNavigationMenu from './UserNavigationMenu';

interface Props {
    routesMain: IRoute[],
    routesAuth?: IRoute[],
    routesFooter?: IRoute[],
    user: ICustomSession["user"]
}

function MobileMainNavigationMenu({
    routesMain,
    routesAuth,
    routesFooter,
    user
}: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu() {
        setIsMenuOpen((prev) => !prev)
    }

    return (
        <div className='block lg:hidden'>
            {/* Hamburger Icon */}
            <span className='block lg:hidden' onClick={toggleMenu}>
                <IconMenu sizeClassName='size-10' />
            </span >


            <div className={`${isMenuOpen ? 'visible' : 'invisible'} absolute top-0 right-0 h-screen w-screen`}>
                {/* Backdrop */}
                <div className={`${isMenuOpen ? 'bg-opacity-[95%] backdrop-blur-sm' : 'bg-opacity-10'} bg-dark  absolute z-10 top-0 left-0 h-screen w-screen transition-all duration-1000`} onClick={toggleMenu}>
                </div>

                {/* Menu */}
                <div className={`${isMenuOpen ? 'w-full delay-500' : 'w-0'} lg:hidden absolute top-0 right-0  h-screen gap-3 z-10 transition-all duration-700 overflow-hidden `}>

                    <div className={`${isMenuOpen ? 'opacity-100 duration-1000' : 'opacity-0 duration-700'} relative h-screen transition-all  flex flex-col justify-between`}>

                        <div className='flex flex-row justify-between p-4'>
                            {/* User Menu */}
                            <UserNavigationMenu user={user} dropdownClass='dropdown-start' toggleMenu={toggleMenu} />

                            {/* Close Menu */}
                            <span onClick={toggleMenu}>
                                <IconClose sizeClassName='size-9' />
                            </span>
                        </div>

                        {/* Links */}
                        <div className="h-full flex flex-col items-center justify-center gap-y-3">

                            {
                                routesMain.map((route) => {
                                    return (
                                        <NavLink key={uniqid()} {...route} toggleMenu={toggleMenu} />
                                    )
                                })
                            }

                            {
                                routesFooter && routesFooter.map((route) => {
                                    return (
                                        <NavLink key={uniqid()} {...route} toggleMenu={toggleMenu} />
                                    )
                                })
                            }
                        </div>

                        {/* Language Selector */}
                        <div className='flex flex-row justify-center p-4'>
                            <LanguageSelector />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MobileMainNavigationMenu