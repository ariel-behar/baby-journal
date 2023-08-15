import Link from 'next/link'
import uniqid from 'uniqid'
import React from 'react'

function NavLinks() {

    const links = [
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
    return (
        <div>
            {links.map((link) => {
                return (
                    <Link key={uniqid()} href={link.path}>{link.title}</Link>
                )
            })}
        </div>
    )
}

export default NavLinks