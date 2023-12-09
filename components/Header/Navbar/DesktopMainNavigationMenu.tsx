import uniqid from "uniqid"

import { IRoute } from "@/types/types"

import NavLink from "./NavLink"

interface Props {
    routesMain: IRoute[]
}

function DesktopMainNavigationMenu({
    routesMain
}: Props) {
    return (
        <>
            <div className="hidden lg:block">
                {routesMain.map((link) => {
                    return (
                        <NavLink key={uniqid()} {...link} />
                    )
                })}
            </div>
        </>
    )
}

export default DesktopMainNavigationMenu