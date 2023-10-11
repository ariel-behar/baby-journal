
interface Props {
    title: string
    classes?: string
    children: React.ReactNode
}

function FormStylesWrapper({
    title,
    classes,
    children
}: Props) { 
    return (
        <div className={`bg-dark-soft p-3 text-center rounded-md ${classes}`}>
            <h3 className="text-xl uppercase mb-3">{title}</h3>
            {children}
        </div>
    )
}

export default FormStylesWrapper