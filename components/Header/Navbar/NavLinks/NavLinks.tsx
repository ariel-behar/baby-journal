import NavLink from './NavLink'

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
        <>
            {links.map((link) => {
                return (
                    <NavLink {...link} />
                )
            })}
        </>
    )
}

export default NavLinks