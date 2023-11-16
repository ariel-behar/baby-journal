import { ReactNode } from "react"
import TableHead from "./TableHead"

interface Props {
    tableHeadings: string[],
    tableWrapperClasses?: string,
    tableClasses?: string,
    children: ReactNode
}

function TableWrapper({
    tableHeadings,
    tableWrapperClasses = "",
    tableClasses = "",
    children
}: Props) {
    return (
        <div className={`overflow-x-auto ${tableWrapperClasses}`}>
            <table className={`table table-xs md:table-sm table-pin-rows ${tableClasses}`}>
                
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