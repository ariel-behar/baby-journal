"use client";
import { useForm } from "react-hook-form";
import { BaseSyntheticEvent } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerUser } from "@/lib/serverActions"

import { IUser } from "@/models/User";
import userSchema from "@/validation/userSchema";

import FormInputFieldWithTooltip from "./FormComponents/FormInputFieldWithTooltip";
import FormSubmitButton from "./FormComponents/FormSubmitButton";

export interface RegisterFormData extends Omit<IUser, "_id" | "img" | 'createdAt' | "updatedAt" | "isAdmin"> {
    password: string;
    confirmPassword: string;
}

function RegisterForm() {
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm<RegisterFormData>({
        resolver: yupResolver(userSchema),
        mode: 'onBlur',
        defaultValues: {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onFormSubmit = async (formData: RegisterFormData, e: BaseSyntheticEvent<object, any, any> | undefined) => {
        e?.preventDefault();

        const { username, firstName, lastName, email, password, confirmPassword } = formData;

        if (username && firstName && lastName && email && password && confirmPassword) {
            try {
               const response = await registerUser(formData);    
               console.log('response:', response)

            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col text-center gap-7">
            <FormInputFieldWithTooltip register={register} errors={errors} name="username" placeholder="Username" type="text" />
            <FormInputFieldWithTooltip register={register} errors={errors} name="firstName" placeholder="First Name" type="text" />
            <FormInputFieldWithTooltip register={register} errors={errors} name="lastName" placeholder="Last Name" type="text" />
            <FormInputFieldWithTooltip register={register} errors={errors} name="email" placeholder="Email" type="email" />
            <FormInputFieldWithTooltip register={register} errors={errors} name="password" placeholder="Password" type="password" />
            <FormInputFieldWithTooltip register={register} errors={errors} name="confirmPassword" placeholder="Confirm Password" type="password" />

            <FormSubmitButton isDirty={isDirty} isValid={isValid}>Register</FormSubmitButton>
        </form>
    )
}

export default RegisterForm