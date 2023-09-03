import { FieldErrors, UseFormRegister } from "react-hook-form";

import { ILoginFormData } from "../LoginForm";
import { IRegisterFormData } from "../RegisterForm";
import { IPostFormData } from "@/components/Forms/AdminPostForm";

import FormErrorTooltip from './FormErrorTooltip'
import FormInputField from "./FormInputField";


interface Props {
    type: HTMLFormElement['type'];
    placeholder: string;
    name: keyof ILoginFormData | keyof IRegisterFormData | keyof IPostFormData;
    className?: string;
    register: UseFormRegister<ILoginFormData> | UseFormRegister<IRegisterFormData> | UseFormRegister<IPostFormData>;
    errors: FieldErrors;
}

function FormInputFieldWithTooltip({
    type = 'text',
    placeholder,
    name,
    className,
    register,
    errors
}: Props) {
    return (
        <FormErrorTooltip errors={errors} name={name}>
            <FormInputField className={`${className} w-full`} type={type} placeholder={placeholder} name={name} register={register} />
        </FormErrorTooltip>
    )
}

export default FormInputFieldWithTooltip