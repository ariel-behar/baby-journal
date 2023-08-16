"use client"
import { useState } from 'react';
import NavLink from './NavLink'
import uniqid from 'uniqid';
import Image from 'next/image';

const routes = [
    {
        title: 'Homepage',
        path: '/'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
    {
        title: 'Blog',
        path: '/blog'
    }
]

function NavLinks() {
    const [open, setOpen] = useState(false)

    // Temporary
    const session = true;
    const isAdmin = true;

    return (
        <nav>
            {/* Desktop Menu */}
            <div className='hidden md:flex items-center'>
                {routes.map((link) => {
                    return (
                        <NavLink key={uniqid()} {...link} />
                    )
                })}

                {session
                    ? (
                        <>
                            {isAdmin && <NavLink title='Admin' path='/admin' />}
                            <button className='bg-light text-dark p-3'>Logout</button>
                        </>
                    )
                    : <NavLink title='Login' path='/login' />
                }
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
        </nav>
    )
}

export default NavLinks