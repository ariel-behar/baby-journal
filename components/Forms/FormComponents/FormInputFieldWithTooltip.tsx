import { FieldErrors, UseFormRegister } from "react-hook-form";

import { ILoginFormData } from "../LoginForm";
import { IRegisterFormData } from "../RegisterForm";
import { IPostFormData } from "../AddEditPostForm";
import { IContactFormData } from "../ContactForm";

import FormErrorTooltip from './FormErrorTooltip'
import FormInputField from "./FormInputField";
import FormInputLabel from "./FormInputLabel";


interface Props {
    type: HTMLFormElement['type'];
    label: string;
    name: keyof ILoginFormData | keyof IRegisterFormData | keyof IPostFormData | keyof IContactFormData;
    disabled?: boolean;
    className?: string;
    register: UseFormRegister<ILoginFormData> | UseFormRegister<IRegisterFormData> | UseFormRegister<IPostFormData> | UseFormRegister<IContactFormData>;
    errors: FieldErrors;
}

function FormInputFieldWithTooltip({
    type = 'text',
    label,
    name,
    disabled = false,
    className,
    register,
    errors
}: Props) {
    return (
        <FormInputLabel label={label} name={name}>
            <FormErrorTooltip errors={errors} name={name}>
                <FormInputField className={`${className} w-full`} type={type} name={name} register={register} disabled={disabled}/>
            </FormErrorTooltip>
        </FormInputLabel>
    )
}

export default FormInputFieldWithTooltip