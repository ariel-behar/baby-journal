import { ReactNode } from "react"
import TableHead from "./TableHead"

interface Props {
    tableHeadings: string[],
    children: ReactNode
}

function TableWrapper({
    tableHeadings,
    children
}: Props) {
    return (
        <div className="overflow-x-auto h-[calc(100vh-250px)]">
            <table className="table table-sm table-pin-rows">
                
                {/* head */}
                <TableHead tableHeadings={tableHeadings} />

                {/* body */}
                <tbody>
                    {children}
                </tbody>
            </table>
        </div>
    )
}

export default TableWrapper