import { Link } from "@/lib/i18nNavigation"

interface Props {
    href: string
    className?: string
    children: React.ReactNode
}

function LinkButton({
    href,
    className = 'btn-sm btn-primary',
    children
}: Props) {
    return (
        <Link href={href}>
            <button
                className={`btn ${className} btn-min-width`}
            >
                {children}
            </button>
        </Link>
    )
}

export default LinkButton