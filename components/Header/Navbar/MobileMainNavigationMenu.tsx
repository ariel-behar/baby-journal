"use client"
import { useEffect, useState } from 'react';
import uniqid from "uniqid"

import { ICustomSession, IRoute } from '@/types/types';

import NavLink from "./NavLink"
import IconMenu from '@/components/Icons/IconMenu';
import IconClose from '@/components/Icons/IconClose';
import LanguageSelector from '@/components/LanguageSelector';
import LogOutButton from '@/components/Buttons/LogOutButton';

interface Props {
    routesMain: IRoute[],
    routesAuth: IRoute[],
    routesLoggedInUser: IRoute[],
    routesFooter: IRoute[],
    user: ICustomSession["user"]
}

function MobileMainNavigationMenu({
    routesMain,
    routesAuth,
    routesLoggedInUser,
    routesFooter,
    user
}: Props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function toggleMenu() {
        setIsMenuOpen((prev) => !prev)
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [isMenuOpen])

    return (
        <aside className='block lg:hidden '>
            {/* Hamburger Icon */}
            <span className='block lg:hidden' onClick={toggleMenu}>
                <IconMenu sizeClassName='size-10' />
            </span >

            <div className={`${isMenuOpen ? 'visible b' : 'invisible'} absolute top-0 right-0 h-screen w-screen`}>
                {/* Backdrop */}
                <div className={`${isMenuOpen ? 'bg-opacity-[95%] backdrop-blur-md' : 'bg-opacity-10'} bg-dark  absolute z-10 top-0 left-0 h-screen w-screen transition-all duration-1000`} onClick={toggleMenu}>
                </div>

                {/* Menu */}
                <div className={`${isMenuOpen ? 'w-full delay-500' : 'w-0'} lg:hidden absolute top-0 right-0 gap-3 z-10 transition-all duration-700 overflow-hidden `} style={{height: "100dvh"}}>

                    <div className={`${isMenuOpen ? 'opacity-100 duration-1000' : 'opacity-0 duration-700'} relative h-screen transition-all  flex flex-col justify-center`}>

                        <div className='absolute w-screen top-3 left-1/2 -translate-x-1/2 flex flex-row justify-between px-2'>
                            <div>
                                {/* User Menu */}
                                <p className='ml-2 mt-1'>
                                    {user?.firstName} {user?.lastName}
                                    &nbsp;{user?.isAdmin == true ? "(admin)" : ""}
                                </p>

                                {/* Logout Button */}
                                {
                                    user && (
                                        <span onClick={toggleMenu}>
                                            <LogOutButton buttonClasses="!bg-transparent border-transparent" formClasses='mx-initial' />
                                        </span>
                                    )
                                }
                            </div>

                            {/* Close Menu */}
                            <span onClick={toggleMenu}>
                                <IconClose sizeClassName='size-9' />
                            </span>
                        </div>

                        {/* Links */}
                        <div className='flex flex-col gap-y-3'>

                            {/* Main Links */}
                            <div className="flex flex-col items-center justify-center">
                                {
                                    routesMain.map((route) => {
                                        return (
                                            <NavLink key={uniqid()} {...route} toggleMenu={toggleMenu} />
                                        )
                                    })
                                }
                            </div>
                            <hr className='border-muted w-5/12 mx-auto' />

                            {/* User Navigation Links */}
                            {user
                                ? (
                                    <div className="flex flex-col items-center justify-center gap-y-3">
                                        {routesLoggedInUser.map((route) => (
                                            <NavLink key={uniqid()} path={route.path} title={route.title} toggleMenu={toggleMenu} />)
                                        )}
                                    </div>
                                )
                                : (
                                    <div className="flex flex-col items-center justify-center gap-y-3">
                                        {routesAuth.map((route) => (
                                            <NavLink key={uniqid()} path={route.path} title={route.title} toggleMenu={toggleMenu} />)
                                        )}
                                    </div>
                                )
                            }

                            <hr className='border-muted w-5/12 mx-auto' />

                            <div className='flex flex-col items-center justify-center gap-y-3'>
                                {
                                    routesFooter && routesFooter.map((route) => {
                                        return (
                                            <NavLink key={uniqid()} {...route} toggleMenu={toggleMenu} />
                                        )
                                    })
                                }
                            </div>

                            <hr className='border-muted w-5/12 mx-auto' />

                            {/* Language Selector & Logout Button */}
                            <div className="flex flex-row items-center justify-center">
                                <LanguageSelector />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default MobileMainNavigationMenu