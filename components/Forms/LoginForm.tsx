"use client"
import { yupResolver } from '@hookform/resolvers/yup';
import { BaseSyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';

import { loginUser } from '@/lib/serverActions';
import { userLoginSchema } from '@/validation/userSchema';

import { useNotificationContext } from '@/context/notificationContext';

import FormInputFieldWithTooltip from './FormComponents/FormInputFieldWithTooltip';
import FormSubmitButton from './FormComponents/FormSubmitButton';

export interface ILoginFormData {
    username: string;
    password: string;
}

function LoginForm() {
    const { displayNotification } = useNotificationContext();
    const { register, handleSubmit, formState: { isDirty, isValid, errors } } = useForm<ILoginFormData>({
        resolver: yupResolver(userLoginSchema),
        mode: 'onBlur',
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const onFormSubmit = async (formData: ILoginFormData, e: BaseSyntheticEvent<object, any, any> | undefined) => {
        e?.preventDefault();

        const { username, password } = formData;

        if (username && password) {
            await loginUser(formData)
                .then(res => {
                    displayNotification('Successfully logged in!', 'success')
                }).catch(error => {
                    displayNotification(error.message, 'error')
                })
        }
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col text-center gap-7">
            <FormInputFieldWithTooltip register={register} errors={errors} name="username" label='Username' type='text' />

            <FormInputFieldWithTooltip register={register} errors={errors} name="password" label='Password' type='password' />

            <FormSubmitButton className='btn-lg' isDirty={isDirty} isValid={isValid}>Login</FormSubmitButton>
        </form>
    )
}

export default LoginForm