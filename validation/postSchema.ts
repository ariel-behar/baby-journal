import { IPost } from '@/models/Post';
import * as yup from 'yup';

interface IPostYupSchema extends Omit<IPost, "_id" | 'createdAt' | "updatedAt" | "likes"> {}

const postSchemaShape = {
    title: yup
        .string()
        .required('Title is required')
        .min(3, 'Title must be at least 3 characters long')
        .max(50, 'Title must be at most 50 characters long'),
    description: yup
        .string()
        .required('Description is required')
        .min(3, 'Description must be at least 3 characters long')
        .max(200, 'Description must be at most 200 characters long'),
    userId: yup
        .string()
        .required('User ID is required'),
    img: yup
        .string()
        .required('Image is required')
}

export const postSchema: yup.ObjectSchema<IPostYupSchema> = yup.object().shape(postSchemaShape);

export default postSchema;