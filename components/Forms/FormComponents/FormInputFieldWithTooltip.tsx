import { FieldErrors, UseFormRegister } from "react-hook-form";

import { ILoginFormData } from "../LoginForm";
import { IRegisterFormData } from "../RegisterForm";

import FormErrorTooltip from './FormErrorTooltip'
import FormInputField from "./FormInputField";
import { IPostFormData } from "../AddEditPostForm";
import FormInputLabel from "./FormInputLabel";


interface Props {
    type: HTMLFormElement['type'];
    label: string;
    name: keyof ILoginFormData | keyof IRegisterFormData | keyof IPostFormData;
    className?: string;
    register: UseFormRegister<ILoginFormData> | UseFormRegister<IRegisterFormData> | UseFormRegister<IPostFormData>;
    errors: FieldErrors;
}

function FormInputFieldWithTooltip({
    type = 'text',
    label,
    name,
    className,
    register,
    errors
}: Props) {
    return (
        <FormInputLabel label={label} name={name}>
            <FormErrorTooltip errors={errors} name={name}>
                <FormInputField className={`${className} w-full`} type={type} name={name} register={register} />
            </FormErrorTooltip>
        </FormInputLabel>
    )
}

export default FormInputFieldWithTooltip