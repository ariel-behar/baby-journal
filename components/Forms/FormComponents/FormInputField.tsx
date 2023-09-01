import { UseFormRegister } from "react-hook-form";
import { LoginFormData } from "../LoginForm";

interface Props {
    type?: HTMLFormElement['type'];
    name: keyof LoginFormData;
    placeholder: string;
    register: UseFormRegister<LoginFormData>;
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
        <input {...register(name)} className={className} type={type} placeholder={placeholder} name={name} />
    )
}

export default FormInputField