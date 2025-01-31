"use client"
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslations } from 'next-intl';
import { BaseSyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';

import { loginUser } from '@/lib/serverActions';
import { userLoginSchema } from '@/validation/userSchema';

import { useNotificationContext } from '@/context/notificationContext';

import FormInputFieldWithTooltip from './FormComponents/FormInputFieldWithTooltip';
import FormSubmitButton from './FormComponents/FormSubmitButton';

export interface ILoginFormData {
    email: string;
    password: string;
}

function LoginForm() {
    const { displayNotification } = useNotificationContext();
    const t = useTranslations();
    const { register, handleSubmit, formState: { isDirty, isValid,isSubmitting, errors } } = useForm<ILoginFormData>({
        resolver: yupResolver(userLoginSchema),
        mode: 'onBlur',
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onFormSubmit = async (formData: ILoginFormData, e: BaseSyntheticEvent<object, any, any> | undefined) => {
        e?.preventDefault();

        const { email, password } = formData;

        if (email && password) {
            await loginUser(formData)
                .then(res => {
                    displayNotification(t('Notifications.successfully-logged-in'), 'info')
                }).catch(error => {
                    displayNotification(error.message, 'error')
                })
        }
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="custom-form">
            <FormInputFieldWithTooltip register={register} errors={errors} name="email" label={t('Forms.labels.email')} type='text' />

            <FormInputFieldWithTooltip register={register} errors={errors} name="password" label={t('Forms.labels.password')} type='password' />

            <FormSubmitButton className='my-5' isDirty={isDirty} isValid={isValid} isSubmitting={isSubmitting}>{t('Common.login')}</FormSubmitButton>
        </form>
    )
}

export default LoginForm