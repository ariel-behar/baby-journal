import { UseFormRegister } from "react-hook-form";
import { LoginFormData } from "../LoginForm";
import { RegisterFormData } from "../RegisterForm";

interface Props {
    type?: HTMLFormElement['type'];
    name: keyof LoginFormData | keyof RegisterFormData;
    placeholder: string;
    register: UseFormRegister<LoginFormData> | UseFormRegister<RegisterFormData>;
    className?: string;
}

function FormInputField({
    type = 'text',
    register,
    name,
    placeholder,
    className
}: Props) {
    return (
        <input {...(register as UseFormRegister<LoginFormData | RegisterFormData>)(name)} className={`${className} form-input`} type={type} placeholder={placeholder} name={name} />
    )
}

export default FormInputField