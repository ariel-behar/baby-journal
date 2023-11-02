"use client"
import { useForm } from "react-hook-form";
import { BaseSyntheticEvent } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { useNotificationContext } from "@/context/notificationContext";

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
    const { displayNotification } = useNotificationContext();
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm<IRegisterFormData>({
        resolver: yupResolver(userSchema),
        mode: 'onBlur',
        defaultValues: {
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

        const { firstName, lastName, email, password, confirmPassword, img, isAdmin } = formData;

        if (firstName && lastName && email && password && confirmPassword) {
            addUser({ firstName, lastName, email, password, confirmPassword, img, isAdmin })
                .then(res => {
                    if (res.ok) {
                        modalRef.current?.close();
                        displayNotification(res.message, 'info')
                    }
                })
                .catch(err => console.log(err))
        }
    }

    return (

        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-3">
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

                <FormSubmitButton className="btn-sm" isDirty={isDirty} isValid={isValid}>
                    Add User
                    <IconPlus />
                </FormSubmitButton>
            </div>
        </form>
    )
}

export default AddNewUserForm