import { FieldErrors } from "react-hook-form";

import { ILoginFormData } from "../LoginForm";
import { IRegisterFormData } from "../RegisterForm";
import { IPostFormDataWithoutUserId } from "@/components/Admin/AdminPostForm";

interface Props {
    name: keyof ILoginFormData | keyof IRegisterFormData | keyof IPostFormDataWithoutUserId;
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