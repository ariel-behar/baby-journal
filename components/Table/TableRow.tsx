import { ReactNode } from "react"

interface Props{
    children: ReactNode,
    index: number
}

function TableRow({
    children,
    index
}: Props) {
    return (
        <tr className={`${index % 2 === 0 ? 'bg-gray-900/70' : ''}`}>
            {children}
        </tr>
    )
}

export default TableRow