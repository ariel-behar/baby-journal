
interface Props {
    isDirty: boolean;
    isValid: boolean;
    className?: string;
    children: React.ReactNode;
}

function FormSubmitButton({
    isDirty,
    isValid,
    className,
    children
}: Props) {
    return (
        <button
            className={`btn btn-primary btn-min-width disabled:bg-primary disabled:opacity-30 disabled:text-primary-content ${className}`}
            disabled={!(isDirty && isValid)}
            type='submit'
        >
            {children}
        </button>
    )
}

export default FormSubmitButton