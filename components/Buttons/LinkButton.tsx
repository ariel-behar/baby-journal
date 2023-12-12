import { Link } from "@/lib/i18nNavigation"

interface Props {
    href: string
    className?: string
    children: React.ReactNode
}

function LinkButton({
    href,
    className,
    children
}: Props) {
    return (
        <Link href={href}>
            <button
                className={`btn btn-sm btn-primary ${className} btn-min-width`}
            >
                {children}
            </button>
        </Link>
    )
}

export default LinkButton