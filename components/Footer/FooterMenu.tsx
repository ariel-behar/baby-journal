import uniqid from "uniqid"

import { routesFooter } from "@/data/routes"

import NavLink from "../Header/Navbar/NavLink"

function FooterMenu() {
    return (
        <>
            {
                routesFooter.map((route) => (
                    <NavLink key={uniqid()} path={route.path} title={route.title} />
                ))
            }
        </>
    )
}

export default FooterMenu