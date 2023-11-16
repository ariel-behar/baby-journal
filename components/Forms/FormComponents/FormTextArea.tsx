import { UseFormRegister } from "react-hook-form";

import { IPostFormData } from "../AddEditPostForm";
import { ILoginFormData } from "../LoginForm";
import { IRegisterFormData } from "../RegisterForm";
import { IContactFormData } from "../ContactForm";

interface Props {
    name: keyof ILoginFormData | keyof IRegisterFormData | keyof IPostFormData | keyof IContactFormData;
    register: UseFormRegister<ILoginFormData> | UseFormRegister<IRegisterFormData> | UseFormRegister<IPostFormData> | UseFormRegister<IContactFormData>;
    className?: string;
}

function FormTextArea({
    register,
    name,
    className
}: Props) {

    return (
        <textarea {...(register as UseFormRegister<ILoginFormData | IRegisterFormData | IPostFormData | IContactFormData>)(name)} name={name} id={name} className={`${className} textarea textarea-bordered min-h-[150px] w-full`}></textarea>
    )
}

export default FormTextArea