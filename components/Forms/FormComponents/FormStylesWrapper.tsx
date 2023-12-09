
interface Props {
    title: string
    className?: string
    children: React.ReactNode
}

function FormStylesWrapper({
    title,
    className = '',
    children
}: Props) { 
    return (
        <div className={`bg-dark-soft p-0 sm:p-3 text-center rounded-md ${className}`}>
            <h4 className="small-title my-3">{title}</h4>
            {children}
        </div>
    )
}

export default FormStylesWrapper