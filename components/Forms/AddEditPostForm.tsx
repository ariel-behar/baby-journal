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

    const onFormSubmit = async (formData: IPostFormData, e: BaseSyntheticEvent<object, any, any> | undefined) => {
        e?.preventDefault();

        const { title, description, img, user } = formData;

        if (title && description && img && user) {
            if (formType === 'add') {
                try {
                    const response = await addPost({ title, description, img, user });
                    console.log('response:', response)

                    modalRef?.current?.close();

                } catch (error) {
                    console.log(error);
                }
            }

            if (formType === 'edit') {
                try {
                    const response = await editPost(post?._id as string, { title, description, img, user });
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
                <input type="hidden" {...register('user')} value={user} name="user" />

                <div className="w-full flex justify-around mt-2">
                    {(formType === 'edit' || formType === 'add') && (
                        <CancelButton onClick={() => modalRef?.current?.close()} />
                    )}

                    <FormSubmitButton isDirty={isDirty} isValid={isValid}>
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