import uniqid from "uniqid"

import { IRoute } from "@/types/types"

import NavLink from "./NavLink"

interface Props {
    routes: IRoute[]
}

function DesktopMainNavigationMenu({
    routes
}: Props) {
    return (
        <>
            <div className="hidden lg:block">
                {routes.map((link) => {
                    return (
                        <NavLink key={uniqid()} {...link} />
                    )
                })}
            </div>
        </>
    )
}

export default DesktopMainNavigationMenu