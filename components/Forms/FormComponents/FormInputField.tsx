import { UseFormRegister } from "react-hook-form";
import { ILoginFormData } from "../LoginForm";
import { IRegisterFormData } from "../RegisterForm";
import { IPostFormDataWithoutUserId } from "@/components/Admin/AdminPostForm";

interface Props {
    type?: HTMLFormElement['type'];
    name: keyof ILoginFormData | keyof IRegisterFormData | keyof IPostFormDataWithoutUserId;
    placeholder: string;
    register: UseFormRegister<ILoginFormData> | UseFormRegister<IRegisterFormData> | UseFormRegister<IPostFormDataWithoutUserId>;
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
        <input {...(register as UseFormRegister<ILoginFormData | IRegisterFormData | IPostFormDataWithoutUserId>)(name)} className={`${className} form-input`} type={type} placeholder={placeholder} name={name} />
    )
}

export default FormInputField