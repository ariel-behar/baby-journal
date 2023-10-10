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

export interface IPostFormData {
    title: string;
    description: string;
    img: string;
    userId: IUser['_id'];
}

interface Props {
    userId: IUser['_id']
    formType: 'add' | 'edit'
    post?: IPost,
    modalRef?: React.RefObject<HTMLDialogElement>
}

function AddEditPostForm({
    userId,
    formType,
    post,
    modalRef
}: Props) {
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm<IPostFormData>({
        resolver: yupResolver(postSchema),
        mode: 'onBlur',
        defaultValues: {
            title: (formType === 'edit' && post?.title) || '',
            description: (formType === 'edit' && post?.description) || '',
            img: (formType === 'edit' && post?.img) || '',
            userId: userId
        }
    });

    const onFormSubmit = async (formData: IPostFormData, e: BaseSyntheticEvent<object, any, any> | undefined) => {
        e?.preventDefault();

        const { title, description, img, userId } = formData;

        if (title && description && img && userId) {
            if (formType === 'add') {
                try {
                    const response = await addPost({ title, description, img, userId });
                    console.log('response:', response)

                } catch (error) {
                    console.log(error);
                }
            } else {
                try {
                    const response = await editPost(post?._id as string, { title, description, img, userId });
                    console.log('response:', response)

                    modalRef?.current?.close();
                } catch (error) {
                    console.log(error);
                }
            }

        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-3">
                <FormInputFieldWithTooltip register={register} errors={errors} name="title" label='Title' type='text' />
                <FormInputFieldWithTooltip register={register} errors={errors} name="description" label='Description' type='text' />
                <FormInputFieldWithTooltip register={register} errors={errors} name="img" label='Image' type='text' />
                <input type="hidden" {...register('userId')} value={userId} name="userId" />

                <div className="w-full flex justify-around mt-2">
                    {formType === 'edit' && (
                        <button type="button" className="btn btn-error btn-lg" onClick={() => modalRef?.current?.close()}>Cancel</button>
                    )}

                    <FormSubmitButton isDirty={isDirty} isValid={isValid}>{formType === 'edit' ? 'Edit' : 'Add'} Post</FormSubmitButton>
                </div>
            </form>


        </>
    )
}

export default AddEditPostForm