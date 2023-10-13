import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

function DashboardTableWrapper({
    children
}:Props) {
    return (
        <table className="table">
            {/* head */}
            <thead>
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" className="checkbox" />
                        </label>
                    </th>
                    <th></th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Author</th>
                    <th>Created At</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default DashboardTableWrapper