import { FieldErrors, UseFormRegister } from "react-hook-form";

import { ILoginFormData } from "../LoginForm";
import { IRegisterFormData } from "../RegisterForm";
import { IContactFormData } from "../ContactForm";
import { IPostFormData } from "../AddEditPostForm";

import FormErrorTooltip from './FormErrorTooltip'
import FormInputLabel from "./FormInputLabel";
import FormTextArea from "./FormTextArea";

interface Props {
    label: string;
    name: keyof ILoginFormData | keyof IRegisterFormData | keyof IPostFormData | keyof IContactFormData;
    className?: string;
    register: UseFormRegister<ILoginFormData> | UseFormRegister<IRegisterFormData> | UseFormRegister<IPostFormData> | UseFormRegister<IContactFormData>;
    errors: FieldErrors;
}

function FormTextAreaWithTooltip({
    label,
    name,
    className,
    register,
    errors
}: Props) {
    return (
        <FormInputLabel label={label} name={name}>
            <FormErrorTooltip errors={errors} name={name}>
                <FormTextArea className={`${className} w-full`} name={name} register={register} />
            </FormErrorTooltip>
        </FormInputLabel>
    )
}

export default FormTextAreaWithTooltip