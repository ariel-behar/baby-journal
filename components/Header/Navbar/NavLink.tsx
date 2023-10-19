"use client"
import uniqid from "uniqid"

import Link from "next/link"

import { usePathname } from "next/navigation"

interface Props {
    title: string
    path: string
}

function NavLink({
    title,
    path
}: Props) {
    const pathname = usePathname()


    return (
        <Link
            className={`min-w-24 px-3 py-2 rounded-2xl font-bold text-center hover:bg-light hover:text-dark 
                ${pathname === path
                    ? 'bg-light text-dark'
                    : ''}
                `}
            key={uniqid()}
            href={path}
        >
            {title}
        </Link>
    )
}

export default NavLink