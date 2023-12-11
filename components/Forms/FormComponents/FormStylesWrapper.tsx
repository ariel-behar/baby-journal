
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
        <div className={`form-styles-wrapper ${className}`}>
            <h4 className="small-title mt-3 mb-2">{title}</h4>
            {children}
        </div>
    )
}

export default FormStylesWrapper