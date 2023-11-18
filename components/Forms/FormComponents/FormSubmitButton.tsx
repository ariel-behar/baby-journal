
interface Props {
    isDirty: boolean;
    isValid: boolean;
    isSubmitting: boolean;
    className?: string;
    children: React.ReactNode;
}

function FormSubmitButton({
    isDirty,
    isValid,
    isSubmitting,
    className,
    children
}: Props) {
    return (
        <button
            className={`btn btn-primary btn-min-width disabled:bg-primary disabled:opacity-30 disabled:text-primary-content ${className}`}
            disabled={!(isDirty && isValid) || isSubmitting}
            type='submit'
        >
            {children}
        </button>
    )
}

export default FormSubmitButton