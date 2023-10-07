import { ILoginFormData } from "../LoginForm";
import { IRegisterFormData } from "../RegisterForm";
import { IPostFormData } from "../AddEditPostForm";

interface Props {
    name: keyof ILoginFormData | keyof IRegisterFormData | keyof IPostFormData;
    label: string;
    classes?: string;
    children: React.ReactNode;
}

function FormInputLabel({
    label,
    name,
    classes,
    children
}: Props ) {
    return (
        <label className={`form-control w-full ${classes}`} htmlFor={name}>
            <div className="label pt-0">
                <span className="label-text">{label}</span>
            </div>

            {children}
        </label>
    )
}

export default FormInputLabel