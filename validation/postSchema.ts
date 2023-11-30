import { IPost } from '@/models/Post';
import * as yup from 'yup';

interface IPostYupSchema extends Omit<IPost, "_id" | 'createdAt' | "updatedAt" | "likes"> {}

const postSchemaShape = {
    title: yup
        .string()
        .required('title-is-required')
        .min(3, 'title-must-be-at-least-3-characters-long')
        .max(50, 'title-must-be-at-most-50-characters-long'),
    description: yup
        .string()
        .required('description-is-required')
        .min(50, 'description-must-be-at-least-50-characters-long')
        .max(1000, 'description-must-be-at-most-1000-characters-long'),
    user: yup
        .string()
        .required('user-id-is-required'),
    img: yup
        .string()
        .required('image-is-required')
}

export const postSchema: yup.ObjectSchema<IPostYupSchema> = yup.object().shape(postSchemaShape);

export default postSchema;