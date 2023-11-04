"use client"
import { useState } from 'react';
import uniqid from "uniqid"

import NavLink from "./NavLink"

import { routes } from "@/data/routes"

import IconMenu from '@/components/Icons/IconMenu';

function MainNavLinks() {
    const [open, setOpen] = useState(false)
    return (
        <div className='lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2'>
            <div className="hidden lg:block">
                {routes.map((link) => {
                    return (
                        <NavLink key={uniqid()} {...link} />
                    )
                })}
            </div>

            {/* Mobile Menu */}
            <span className='block lg:hidden' onClick={() => setOpen((prev) => !prev)}>
                <IconMenu sizeClassName='size-10' />
            </span>


            {
                open && (
                    <div className='lg:hidden flex flex-col items-center justify-center absolute top-[100px] right-0 w-1/2 h-[calc(100vh-100px)] bg-green-500 gap-3 z-10'>
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
        </div>
    )
}

export default MainNavLinks