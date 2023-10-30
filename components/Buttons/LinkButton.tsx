import Link from 'next/link'

interface Props {
    href: string
    children: React.ReactNode
}

function LinkButton({
    href,
    children
}: Props) {
    return (
        <Link href={href}>
            <button
                className="btn btn-sm btn-primary btn-min-width"
            >
                {children}
            </button>
        </Link>
    )
}

export default LinkButton