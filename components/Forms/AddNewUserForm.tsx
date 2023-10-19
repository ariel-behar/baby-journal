"use client"
import { useForm } from "react-hook-form";
import { BaseSyntheticEvent } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import userSchema from "@/validation/userSchema";
import { addUser } from "@/lib/serverActions"

import { IRegisterFormData } from "./RegisterForm";
import FormSubmitButton from "./FormComponents/FormSubmitButton";
import FormInputFieldWithTooltip from "./FormComponents/FormInputFieldWithTooltip";
import CancelButton from "../Buttons/CancelButton";
import IconPlus from "../Icons/IconPlus";

interface Props {
    modalRef: React.RefObject<HTMLDialogElement>
}

function AddNewUserForm({
    modalRef
}: Props) {
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm<IRegisterFormData>({
        resolver: yupResolver(userSchema),
        mode: 'onBlur',
        defaultValues: {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            img: '',
            isAdmin: false
        },
    });

    const onFormSubmit = async (formData: IRegisterFormData, e: BaseSyntheticEvent<object, any, any> | undefined) => {
        e?.preventDefault();

        const { username, firstName, lastName, email, password, confirmPassword, img, isAdmin } = formData;

        if (username && firstName && lastName && email && password && confirmPassword) {
            try {
                const response = await addUser({ username, firstName, lastName, email, password, confirmPassword, img, isAdmin });
                console.log('response:', response)

                modalRef.current?.close();

            } catch (error) {
                console.log(error);
            }
        }
    }

    return (

        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-3">
            <FormInputFieldWithTooltip register={register} errors={errors} name="username" label='Username' type='text' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="firstName" label='First Name' type='text' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="lastName" label='Last Name' type='text' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="email" label='Email' type='email' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="password" label='Password' type='password' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="confirmPassword" label='Confirm Password' type='password' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="img" label='Image' type='text' />

            <select {...register('isAdmin')} className="form-input" name="isAdmin" id="">
                <option value="false">User</option>
                <option value="true">Admin</option>
            </select>

            <div className="w-full flex justify-around mt-2">
                <CancelButton onClick={() => modalRef?.current?.close()} />

                <FormSubmitButton isDirty={isDirty} isValid={isValid}>
                    Add User
                    <IconPlus sizeClassName="size-5" />
                </FormSubmitButton>
            </div>
        </form>
    )
}

export default AddNewUserForm