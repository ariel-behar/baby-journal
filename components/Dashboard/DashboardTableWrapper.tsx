import { ReactNode } from "react"
import DashboardTableHead from "./DashboardTableHead"

interface Props {
    children: ReactNode
}

function DashboardTableWrapper({
    children
}: Props) {
    return (
        <div className="overflow-x-auto h-[calc(100vh-250px)]">
            <table className="table table-sm table-pin-rows">
                
                {/* head */}
                <DashboardTableHead tableHeadings={["", "Title", "Description", "Author", "Created At", ""]} />

                {/* body */}
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}

export default DashboardTableWrapper