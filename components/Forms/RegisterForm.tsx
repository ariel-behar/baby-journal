"use client";
import { useForm } from "react-hook-form";
import { BaseSyntheticEvent } from "react";
import { useTranslations } from "next-intl";

import { yupResolver } from "@hookform/resolvers/yup";

import { useNotificationContext } from "@/context/notificationContext";

import { registerUser } from "@/lib/serverActions"

import { IUser } from "@/models/User";
import userSchema from "@/validation/userSchema";

import FormInputFieldWithTooltip from "./FormComponents/FormInputFieldWithTooltip";
import FormSubmitButton from "./FormComponents/FormSubmitButton";

export interface IRegisterFormData extends Omit<IUser, "_id" | 'createdAt' | "updatedAt"> {
    password: string;
    confirmPassword: string;
}

function RegisterForm() {
    const { displayNotification } = useNotificationContext();
    const t = useTranslations("Forms")
    const { register, handleSubmit, formState: { errors, isValid, isSubmitting, isDirty } } = useForm<IRegisterFormData>({
        resolver: yupResolver(userSchema),
        mode: 'onBlur',
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    });

    const onFormSubmit = (formData: IRegisterFormData, e: BaseSyntheticEvent<object, any, any> | undefined) => {
        e?.preventDefault();

        const { firstName, lastName, email, password, confirmPassword } = formData;

        if (firstName && lastName && email && password && confirmPassword) {
            registerUser(formData)
                .then(res => {
                    displayNotification('User has been registered!', 'info')
                }).catch(error => {
                    displayNotification(error.message, 'error')
                })
        }
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col text-center gap-5">
            <div className="flex gap-x-2">
                <FormInputFieldWithTooltip register={register} errors={errors} name="firstName" label={t('labels.first-name')} type="text" />
                <FormInputFieldWithTooltip register={register} errors={errors} name="lastName" label={t('labels.last-name')} type="text" />
            </div>

            <FormInputFieldWithTooltip register={register} errors={errors} name="email" label={t('labels.email')} type="email" />

            <div className="flex gap-x-2">
                <FormInputFieldWithTooltip register={register} errors={errors} name="password" label={t('labels.password')} type="password" />
                <FormInputFieldWithTooltip register={register} errors={errors} name="confirmPassword" label={t('labels.confirm-password')} type="password" />
            </div>

            <FormSubmitButton className="btn-lg" isDirty={isDirty} isValid={isValid} isSubmitting={isSubmitting}>{t('register')}</FormSubmitButton>
        </form>
    )
}

export default RegisterForm