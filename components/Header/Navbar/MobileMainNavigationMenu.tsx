"use client"
import { useState } from 'react';
import uniqid from "uniqid"

import { IRoute } from '@/types/types';

import NavLink from "./NavLink"
import IconMenu from '@/components/Icons/IconMenu';

interface Props {
    routes: IRoute[]
}

function MobileMainNavigationMenu({
    routes
}: Props) {
    const [open, setOpen] = useState(false)
    return (
        <>
            {/* Mobile Menu */}
            <span className='block lg:hidden' onClick={() => setOpen((prev) => !prev)}>
                <IconMenu sizeClassName='size-10' />
            </span >


            {
                open && (
                    <div onMouseOut={() => setOpen((prev) => false)} className='lg:hidden flex flex-col items-center justify-center absolute top-[100px] right-0 w-1/2 h-[calc(100vh-100px)] bg-green-500 gap-3 z-10'>
                        {
                            routes.map((link) => {
                                return (
                                    <NavLink key={uniqid()} {...link} />
                                )
                            })
                        }
                    </div>
                )
            }
        </>
    )
}

export default MobileMainNavigationMenu