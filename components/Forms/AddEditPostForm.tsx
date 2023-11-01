"use client"
import { yupResolver } from "@hookform/resolvers/yup"
import { BaseSyntheticEvent } from "react"
import { useForm } from "react-hook-form"

import { addPost, editPost } from "@/lib/serverActions"
import { IUser } from "@/models/User"
import postSchema from "@/validation/postSchema"

import FormInputFieldWithTooltip from "./FormComponents/FormInputFieldWithTooltip"
import FormSubmitButton from "./FormComponents/FormSubmitButton"
import { IPost } from "@/models/Post"
import CancelButton from "../Buttons/CancelButton"
import IconPencil from "../Icons/IconPencil"
import IconPlus from "../Icons/IconPlus"
import { useNotificationContext } from "@/context/notificationContext"

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
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm<IPostFormData>({
        resolver: yupResolver(postSchema),
        mode: 'onBlur',
        defaultValues: {
            title: (formType === 'edit' && post?.title) || '',
            description: (formType === 'edit' && post?.description) || '',
            img: (formType === 'edit' && post?.img) || '',
            user: user
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
            <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-3">
                <FormInputFieldWithTooltip register={register} errors={errors} name="title" label='Title' type='text' />
                <FormInputFieldWithTooltip register={register} errors={errors} name="description" label='Description' type='text' />
                <FormInputFieldWithTooltip register={register} errors={errors} name="img" label='Image' type='text' />
                <input type="hidden" {...register('user')} value={user} name="user" />

                <div className="w-full flex justify-around mt-2">
                    {(formType === 'edit' || formType === 'add') && (
                        <CancelButton onClick={() => modalRef?.current?.close()} />
                    )}

                    <FormSubmitButton className="btn-sm" isDirty={isDirty} isValid={isValid}>
                        {formType === 'edit'
                            ? 'Edit'
                            : 'Add'
                        }
                        &nbsp;
                        Post

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