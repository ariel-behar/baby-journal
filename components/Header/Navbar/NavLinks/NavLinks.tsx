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

    // Temporary
    const session = true;
    const isAdmin = true;

    return (
        <>
            {links.map((link) => {
                return (
                    <NavLink {...link} />
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
        </>
    )
}

export default NavLinks