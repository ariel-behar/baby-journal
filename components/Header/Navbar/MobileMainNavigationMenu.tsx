"use client"
import { useState } from 'react';
import uniqid from "uniqid"

import { IRoute } from '@/types/types';

import NavLink from "./NavLink"
import IconMenu from '@/components/Icons/IconMenu';
import IconClose from '@/components/Icons/IconClose';

interface Props {
    routes: IRoute[]
}

function MobileMainNavigationMenu({
    routes
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
                <div className={`${isMenuOpen ? 'backdrop-brightness-[30%]' : 'backdrop-brightness-[100%]'} absolute z-10 top-0 left-0 h-screen w-screen transition-all duration-1000`} onClick={toggleMenu}>
                </div>

                {/* Menu */}
                <div className={`${isMenuOpen ? 'w-3/4' : 'w-0'} lg:hidden absolute top-0 right-0  h-screen bg-green-500 gap-3 z-10 transition-all duration-1000 overflow-hidden `}>

                    {/* Close Menu */}
                    <span className={`${isMenuOpen ? 'opacity-100' : 'opacity-0'} absolute top-3 right-3 transition-all duration-1000`} onClick={toggleMenu}>
                        <IconClose sizeClassName='size-9'  />
                    </span>

                    {/* Links */}
                    <div className={`${isMenuOpen ? 'opacity-100' : 'opacity-0'} h-screen flex flex-col items-center justify-center transition-all duration-1000 `}>
                        {
                            routes.map((link) => {
                                return (
                                    <NavLink key={uniqid()} {...link} toggleMenu={toggleMenu} />
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MobileMainNavigationMenu