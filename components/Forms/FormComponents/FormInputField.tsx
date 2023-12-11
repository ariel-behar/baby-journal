import { UseFormRegister } from "react-hook-form";

import { ILoginFormData } from "../LoginForm";
import { IRegisterFormData } from "../RegisterForm";
import { IPostFormData } from "../AddEditPostForm";
import { IContactFormData } from "../ContactForm";

interface Props {
    type?: HTMLFormElement['type'];
    name: keyof ILoginFormData | keyof IRegisterFormData | keyof IPostFormData | keyof IContactFormData;
    disabled?: boolean;
    register: UseFormRegister<ILoginFormData> | UseFormRegister<IRegisterFormData> | UseFormRegister<IPostFormData> | UseFormRegister<IContactFormData>;
    className?: string;
    rest?: JSX.IntrinsicAttributes & Props;
}

function FormInputField({
    type = 'text',
    name,
    disabled = false,
    register,
    className,
    ...rest
}: Props) {
    return (
        <>
            <input 
            {...(register as UseFormRegister<ILoginFormData | IRegisterFormData | IPostFormData | IContactFormData>)(name)} 
            className={`${className} form-input input input-bordered w-full h-[2.3rem] ${disabled ? '!bg-opacity-50' : ''}`} 
            type={type} 
            name={name} 
            id={name} 
            autoComplete="on"
            disabled={disabled}
            />
        </>
    )
}

export default FormInputField