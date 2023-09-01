import { FieldErrors, UseFormRegister } from "react-hook-form";

import FormErrorTooltip from './FormErrorTooltip'
import FormInputField from "./FormInputField";
import { LoginFormData } from "../LoginForm";
import { RegisterFormData } from "../RegisterForm";

interface Props {
    type: HTMLFormElement['type'];
    placeholder: string;
    name: keyof LoginFormData | keyof RegisterFormData;
    className?: string;
    register: UseFormRegister<LoginFormData> | UseFormRegister<RegisterFormData>;
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