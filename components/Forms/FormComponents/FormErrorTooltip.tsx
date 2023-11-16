import { FieldErrors } from "react-hook-form";

import { ILoginFormData } from "../LoginForm";
import { IRegisterFormData } from "../RegisterForm";
import { IPostFormData } from "../AddEditPostForm";
import { IContactFormData } from "../ContactForm";

interface Props {
    name: keyof ILoginFormData | keyof IRegisterFormData | keyof IPostFormData | keyof IContactFormData;
    errors: FieldErrors;
    children: React.ReactNode;
}

function FormErrorTooltip({
    name,
    errors,
    children

}:Props) {
    return (
        <div className={`tooltip tooltip-top ${errors[name] && 'tooltip-open'} tooltip-error`} data-tip={errors[name] && errors[name]?.message}>
            {children}
        </div>
    )
}

export default FormErrorTooltip