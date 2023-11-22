import uniqid from "uniqid"

import { routesFooter } from "@/data/routes"

import NavLink from "../Header/Navbar/NavLink"

function FooterMenu() {
    return (
        <nav>
            {
                routesFooter.map((route) => (
                    <NavLink key={uniqid()} path={route.path} title={route.title} />
                ))
            }
        </nav>
    )
}

export default FooterMenu