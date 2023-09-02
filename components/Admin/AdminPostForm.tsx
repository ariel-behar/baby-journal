"use client"
import { yupResolver } from "@hookform/resolvers/yup"
import { BaseSyntheticEvent } from "react"
import { useForm } from "react-hook-form"

import { addPost } from "@/lib/serverActions"
import { IUser } from "@/models/User"
import postSchema from "@/validation/postSchema"

import FormInputFieldWithTooltip from "../Forms/FormComponents/FormInputFieldWithTooltip"
import FormSubmitButton from "../Forms/FormComponents/FormSubmitButton"

export interface IPostFormData {
    title: string;
    description: string;
    img: string;
    userId: IUser['_id'];
}

interface Props {
    userId: IUser['_id']
}

function AdminPostForm({
    userId
}:Props) {
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm<IPostFormData>({
        resolver: yupResolver(postSchema),
        mode: 'onBlur',
        defaultValues: {
            title: '',
            description: '',
            img: '',
            userId
        },
    });
    
    const onFormSubmit = async (formData: IPostFormData, e: BaseSyntheticEvent<object, any, any> | undefined) => {
        e?.preventDefault();

        const { title, description, img, userId } = formData;

        if (title && description && img && userId) {
            try {
               const response = await addPost({title, description, img, userId});    
               console.log('response:', response)

            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <div className="w-[500px] bg-dark-soft p-3 text-center rounded-md ">
            <h3 className="text-xl uppercase mb-3">Add new Post</h3>
            <form onSubmit={handleSubmit(onFormSubmit)} className="flex flex-col gap-3">
                <FormInputFieldWithTooltip register={register} errors={errors} name="title" placeholder='Title' type='text' />
                <FormInputFieldWithTooltip register={register} errors={errors} name="description" placeholder='Description' type='text' />
                <FormInputFieldWithTooltip register={register} errors={errors} name="img" placeholder='Image' type='text' />
                <input type="hidden" {...register('userId')} value={userId} name="userId" />

                <FormSubmitButton isDirty={isDirty} isValid={isValid}>Add Post</FormSubmitButton>
            </form>
        </div>
    )
}

export default AdminPostForm