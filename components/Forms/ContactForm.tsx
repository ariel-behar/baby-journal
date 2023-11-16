"use client"
import { BaseSyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';
import FormInputFieldWithTooltip from './FormComponents/FormInputFieldWithTooltip';
import { yupResolver } from '@hookform/resolvers/yup';
import FormTextAreaWithTooltip from './FormComponents/FormTextAreaWithTooltip';

export interface IContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}


function ContactForm() {
    const { register, handleSubmit, formState: { isDirty, isValid, errors } } = useForm<IContactFormData>({
        // resolver: yupResolver(userLoginSchema),
        mode: 'onBlur',
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
    });

    // const onFormSubmit = async (formData: ILoginFormData, e: BaseSyntheticEvent<object, any, any> | undefined) => {
    //     e?.preventDefault();

    //     const { email, password } = formData;

    //     if (email && password) {
    //         await loginUser(formData)
    //             .then(res => {
    //                 displayNotification('Successfully logged in!', 'info')
    //             }).catch(error => {
    //                 displayNotification(error.message, 'error')
    //             })
    //     }
    // }
    
    return (
        <form action="" className="flex flex-col gap-5 bg-dark-soft p-3 text-center rounded-md w-full">
            <FormInputFieldWithTooltip register={register} errors={errors} name="firstName" label='First Name' type='text' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="lastName" label='Last Name' type='text' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="email" label='Email' type='email' />

            <FormTextAreaWithTooltip register={register} errors={errors} name="message" label='Message' />

            <button className="btn btn-lg btn-primary">Send</button>
        </form>
    )
}

export default ContactForm