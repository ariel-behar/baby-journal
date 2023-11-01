import { UseFormRegister } from "react-hook-form";
import { ILoginFormData } from "../LoginForm";
import { IRegisterFormData } from "../RegisterForm";
import { IPostFormData } from "../AddEditPostForm";

interface Props {
    type?: HTMLFormElement['type'];
    name: keyof ILoginFormData | keyof IRegisterFormData | keyof IPostFormData;
    register: UseFormRegister<ILoginFormData> | UseFormRegister<IRegisterFormData> | UseFormRegister<IPostFormData>;
    className?: string;
}

function FormInputField({
    type = 'text',
    register,
    name,
    className
}: Props) {
    return (
        <>
            <input {...(register as UseFormRegister<ILoginFormData | IRegisterFormData | IPostFormData>)(name)} className={`${className} form-input input input-bordered w-full`} type={type} name={name} id={name} autoComplete="on"/>
        </>
    )
}

export default FormInputField