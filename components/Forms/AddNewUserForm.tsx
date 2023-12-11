"use client"
import { useForm } from "react-hook-form";
import { BaseSyntheticEvent } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslations } from "next-intl";

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
    const t = useTranslations()
    const { register, handleSubmit, formState: { errors, isValid, isDirty, isSubmitting } } = useForm<IRegisterFormData>({
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

        <form onSubmit={handleSubmit(onFormSubmit)} className="custom-form">
            <FormInputFieldWithTooltip register={register} errors={errors} name="firstName" label={t('Forms.labels.first-name')} type='text' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="lastName" label={t('Forms.labels.last-name')} type='text' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="email" label={t('Forms.labels.email')} type='email' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="password" label={t('Forms.labels.password')} type='password' />
            <FormInputFieldWithTooltip register={register} errors={errors} name="confirmPassword" label={t('Forms.labels.confirm-password')} type='password' />
            {/* <FormInputFieldWithTooltip register={register} errors={errors} name="img" label={t('Forms.labels.image')} type='text' /> */}

            <select {...register('isAdmin')} className="form-input p-[8px]" name="isAdmin" id="">
                <option value="false">{t('ProfilePage.user')}</option>
                <option value="true">{t('ProfilePage.admin')}</option>
            </select>

            <div className="w-full flex justify-around mt-2">
                <CancelButton onClick={() => modalRef?.current?.close()} />

                <FormSubmitButton className="btn-sm" isDirty={isDirty} isValid={isValid} isSubmitting={isSubmitting}>
                    {t('Forms.add-user')}
                    <IconPlus />
                </FormSubmitButton>
            </div>
        </form>
    )
}

export default AddNewUserForm