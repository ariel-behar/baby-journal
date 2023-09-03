import { UseFormRegister } from "react-hook-form";
import { ILoginFormData } from "../LoginForm";
import { IRegisterFormData } from "../RegisterForm";
import { IPostFormData } from "@/components/Forms/AdminPostForm";

interface Props {
    type?: HTMLFormElement['type'];
    name: keyof ILoginFormData | keyof IRegisterFormData | keyof IPostFormData;
    placeholder: string;
    register: UseFormRegister<ILoginFormData> | UseFormRegister<IRegisterFormData> | UseFormRegister<IPostFormData>;
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
        <input {...(register as UseFormRegister<ILoginFormData | IRegisterFormData | IPostFormData>)(name)} className={`${className} form-input`} type={type} placeholder={placeholder} name={name} />
    )
}

export default FormInputField