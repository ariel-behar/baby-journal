"use client"
import { BaseSyntheticEvent } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { contactSchema } from '@/validation/contactSchema';

import { useNotificationContext } from '@/context/notificationContext';

import FormInputFieldWithTooltip from './FormComponents/FormInputFieldWithTooltip';
import FormTextAreaWithTooltip from './FormComponents/FormTextAreaWithTooltip';
import FormSubmitButton from './FormComponents/FormSubmitButton';
import { sendContactMessage } from '@/lib/serverActions';

export interface IContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

function ContactForm() {
    const { displayNotification } = useNotificationContext();
    const { register, handleSubmit, formState: { isDirty, isValid, errors } } = useForm<IContactFormData>({
        resolver: yupResolver(contactSchema),
        mode: 'onBlur',
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            message: '',
        },
    });

    const onFormSubmit = async (formData: IContactFormData, e: BaseSyntheticEvent<object, any, any> | undefined) => {
        e?.preventDefault();

        const { firstName, lastName, email, message } = formData;

        if (firstName && lastName && email && message) {
            await sendContactMessage(formData)
                .then(res => {
                    displayNotification('Successfully logged in!', 'info')
                }).catch(error => {
                    displayNotification(error.message, 'error')
                })
        }
    }

    return (
        <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-5 bg-dark-soft p-3 text-center rounded-md w-full">
            <FormInputFieldWithTooltip register={register} errors={errors} name="firstName" label='First Name' type='text' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="lastName" label='Last Name' type='text' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="email" label='Email' type='email' />

            <FormTextAreaWithTooltip register={register} errors={errors} name="message" label='Message' />

            <FormSubmitButton className='btn-lg' isDirty={isDirty} isValid={isValid}>
                Send
            </FormSubmitButton>
        </form>
    )
}

export default ContactForm