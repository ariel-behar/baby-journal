import { FieldErrors } from "react-hook-form";
import { LoginFormData } from "../LoginForm";
import { RegisterFormData } from "../RegisterForm";

interface Props {
    name: keyof LoginFormData | keyof RegisterFormData;
    errors: FieldErrors;
    children: React.ReactNode;
}

function FormErrorTooltip({
    name,
    errors,
    children

}:Props) {
    return (
        <div className={`tooltip tooltip-top md:tooltip-left ${errors[name] && 'tooltip-open'} tooltip-error`} data-tip={errors[name] && errors[name]?.message}>
            {children}
        </div>
    )
}

export default FormErrorTooltip