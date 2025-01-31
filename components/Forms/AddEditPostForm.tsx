"use client"
import { yupResolver } from "@hookform/resolvers/yup"
import { BaseSyntheticEvent } from "react"
import { useForm } from "react-hook-form"
import { useTranslations } from "next-intl"

import { IPost } from "@/models/Post"
import { addPost, editPost } from "@/lib/serverActions"
import { IUser } from "@/models/User"
import postSchema from "@/validation/postSchema"

import { useNotificationContext } from "@/context/notificationContext"

import FormInputFieldWithTooltip from "./FormComponents/FormInputFieldWithTooltip"
import FormSubmitButton from "./FormComponents/FormSubmitButton"
import CancelButton from "../Buttons/CancelButton"
import IconPencil from "../Icons/IconPencil"
import IconPlus from "../Icons/IconPlus"
import PexelsPhotoSearch from "./PexelsSearchComponents/PexelsPhotoSearch"
import FormTextAreaWithTooltip from "./FormComponents/FormTextAreaWithTooltip"

export interface IPostFormData {
    title: string;
    description: string;
    img: string;
    user: IUser['_id'];
}

interface Props {
    user: IUser['_id']
    formType: 'add' | 'edit'
    post?: IPost,
    modalRef?: React.RefObject<HTMLDialogElement>
}

function AddEditPostForm({
    user,
    formType,
    post,
    modalRef
}: Props) {
    const { displayNotification } = useNotificationContext();
    const t = useTranslations("Forms")
    const { register, handleSubmit, setValue, formState: { errors, isValid, isDirty, isSubmitting } } = useForm<IPostFormData>({
        resolver: yupResolver(postSchema),
        mode: 'onBlur',
        defaultValues: {
            title: (formType === 'edit' && post?.title) || '',
            description: (formType === 'edit' && post?.description) || '',
            img: (formType === 'edit' && post?.img) || '',
            user: (formType === 'edit' && post?.user) || user
        }
    });
    

    const onFormSubmit = (formData: IPostFormData, e: BaseSyntheticEvent<object, any, any> | undefined) => {
        e?.preventDefault();

        const { title, description, img, user } = formData;

        if (title && description && img && user) {
            if (formType === 'add') {
                addPost({ title, description, img, user })
                    .then(res => {
                        if (res.ok) {
                            modalRef?.current?.close();
                            displayNotification(res.message, 'info')
                        }
                    })
                    .catch(err => {
                        displayNotification(err.message, 'error')
                    })
            }

            if (formType === 'edit') {
                editPost(post?._id as string, { title, description, img, user })
                    .then(res => {
                        if (res.ok) {
                            modalRef?.current?.close();
                            displayNotification(res.message, 'info')
                        }
                    })
                    .catch(err => {
                        displayNotification(err.message, 'error')
                    })
            }
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmit)} className="custom-form">
                <FormInputFieldWithTooltip register={register} errors={errors} name="title" label={t('labels.title')} type='text' />
                <FormTextAreaWithTooltip register={register} errors={errors} name="description" label={t('labels.description')} />
                <PexelsPhotoSearch register={register} errors={errors} name="img" setValue={setValue} post={post}/>
                <input type="hidden" {...register('user')} value={user} name="user" />

                <div className="w-full flex justify-around mt-2">
                    {(formType === 'edit' || formType === 'add') && (
                        <CancelButton onClick={() => modalRef?.current?.close()} />
                    )}

                    <FormSubmitButton className="btn-sm" isDirty={isDirty} isValid={isValid} isSubmitting={isSubmitting}>
                        {formType === 'edit'
                            ? <>{t('edit')}</>
                            : <>{t('add')}</>
                        }
                        &nbsp;

                        {formType === 'edit'
                            ? <IconPencil />
                            : <IconPlus />
                        }
                    </FormSubmitButton>
                </div>
            </form>


        </>
    )
}

export default AddEditPostForm