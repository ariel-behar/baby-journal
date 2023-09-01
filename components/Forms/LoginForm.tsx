"use client"
import { login } from '@/lib/serverActions';
import { userLoginSchema } from '@/validation/userSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { BaseSyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';
import FormInputFieldWithTooltip from './FormComponents/FormInputFieldWithTooltip';
import FormSubmitButton from './FormComponents/FormSubmitButton';

export interface LoginFormData {
    username: string;
    password: string;
}

function LoginForm() {
    const { register, handleSubmit, formState: { isDirty, isValid, errors } } = useForm<LoginFormData>({
        resolver: yupResolver(userLoginSchema),
        mode: 'onBlur',
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const onFormSubmit = async (formData: LoginFormData, e: BaseSyntheticEvent<object, any, any> | undefined) => {
        e?.preventDefault();

        const { username, password } = formData;

        if (username && password) {
            await login(formData);
        }
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col text-center gap-7">
            <FormInputFieldWithTooltip register={register} errors={errors} name="username" placeholder='Username' type='text' />

            <FormInputFieldWithTooltip register={register} errors={errors} name="password" placeholder='Password' type='password' />

            <FormSubmitButton isDirty={isDirty} isValid={isValid}>Login</FormSubmitButton>
        </form>
    )
}

export default LoginForm