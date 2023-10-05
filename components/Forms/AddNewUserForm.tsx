"use client"
import { useForm } from "react-hook-form";
import { BaseSyntheticEvent } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import userSchema from "@/validation/userSchema";
import { addUser } from "@/lib/serverActions"

import { IRegisterFormData } from "./RegisterForm";
import FormSubmitButton from "./FormComponents/FormSubmitButton";
import FormInputFieldWithTooltip from "./FormComponents/FormInputFieldWithTooltip";

function AddNewUserForm() {
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

            } catch (error) {
                console.log(error);
            }
        }
    }

    return (

        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-3">
            <FormInputFieldWithTooltip register={register} errors={errors} name="username" placeholder='Username' type='text' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="firstName" placeholder='First Name' type='text' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="lastName" placeholder='Last Name' type='text' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="email" placeholder='Email' type='email' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="password" placeholder='Password' type='password' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="confirmPassword" placeholder='Confirm Password' type='password' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="img" placeholder='Image' type='text' />

            <select {...register('isAdmin')} className="form-input" name="isAdmin" id="">
                <option value="false">User</option>
                <option value="true">Admin</option>
            </select>

            <FormSubmitButton isDirty={isDirty} isValid={isValid}>Add User</FormSubmitButton>
        </form>
    )
}

export default AddNewUserForm