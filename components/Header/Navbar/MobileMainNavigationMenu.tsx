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
        <>
            {/* Mobile Menu */}
            <span className='block lg:hidden' onClick={toggleMenu}>
                <IconMenu sizeClassName='size-10' />
            </span >


            {
                isMenuOpen && (
                    <div className='absolute top-0 left-0 h-screen w-screen'>
                        <div className='absolute z-10 top-0 left-0 h-screen w-screen backdrop-brightness-[30%]' onClick={toggleMenu}>
                        </div>

                        <div className='lg:hidden flex flex-col items-center justify-center absolute top-0 right-0 w-3/4 h-screen bg-green-500 gap-3 z-10'>
                            <span className='absolute top-3 right-3' onClick={toggleMenu}>
                                <IconClose sizeClassName='size-8' />
                            </span>
                            {
                                routes.map((link) => {
                                    return (
                                        <NavLink key={uniqid()} {...link} toggleMenu={toggleMenu} />
                                    )
                                })
                            }
                        </div>

                    </div>
                )
            }
        </>
    )
}

export default MobileMainNavigationMenu