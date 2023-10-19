"use client"
import { useState } from 'react';
import uniqid from "uniqid"
import Image from 'next/image';

import NavLink from "./NavLink"

import { routes } from "@/data/routes"

function MainNavLinks() {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className="hidden md:block">
                {routes.map((link) => {
                    return (
                        <NavLink key={uniqid()} {...link} />
                    )
                })}


            </div>
            {/* Mobile Menu */}
            <Image className='block md:hidden' src='/img/menu.png' alt='Menu' width={30} height={30} onClick={() => setOpen((prev) => !prev)} />

            {
                open && (
                    <div className='md:hidden flex flex-col items-center justify-center absolute top-[100px] right-0 w-1/2 h-[calc(100vh-100px)] bg-green-500 gap-3 z-10'>
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