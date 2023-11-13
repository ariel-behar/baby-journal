"use client"
import uniqid from "uniqid"

import { Link, usePathname } from "@/lib/i18nNavigation"

interface Props {
    title: string
    path: string
    toggleMenu?: () => void
}

function NavLink({
    title,
    path,
    toggleMenu
}: Props) {
    const pathname = usePathname()

    return (
        <Link
            className={`lg:min-w-24 lg:mx-3 px-3 py-2 rounded-2xl font-bold text-center hover:bg-light hover:text-dark 
                ${pathname === path
                    ? 'bg-light text-dark'
                    : ''}
                `}
            key={uniqid()}
            href={path}
            onClick={toggleMenu}
        >
            {title}
        </Link>
    )
}

export default NavLink