
interface Props {
    isDirty: boolean;
    isValid: boolean;
    children: React.ReactNode;
}

function FormSubmitButton({
    isDirty,
    isValid,
    children
}: Props) {
    return (
        <button
            className="btn btn-lg btn-primary disabled:bg-primary disabled:opacity-30 disabled:text-primary-content"
            disabled={!(isDirty && isValid)}
            type='submit'
        >
            {children}
        </button>
    )
}

export default FormSubmitButton