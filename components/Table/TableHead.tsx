import uniqid from "uniqid"

interface Props {
    tableHeadings: string[]
}

function TableHead({
    tableHeadings
}: Props) {
    return (
        <thead>
            <tr>
                {
                    tableHeadings.map((heading) => (
                        <th key={uniqid()}>{heading}</th>
                    ))
                }
            </tr>
        </thead>
    )
}

export default TableHead