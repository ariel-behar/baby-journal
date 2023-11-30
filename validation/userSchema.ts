import { IUser } from '@/models/User'
import { emailRegex, passwordRegex } from '@/utils/regex';
import * as yup from 'yup'

interface IUserYupSchema extends Omit<IUser, "_id" | 'createdAt' | "updatedAt" > {
    password: string;
    confirmPassword: string;
}

interface IUserLoginYupSchema {
    email: string;
    password: string;
}

const userLoginSchemaShape = {
    email: yup
        .string()
        .required('email-is-required'),
    password: yup
        .string()
        .required('password-is-required')
}

const userSchemaShape = {
    firstName: yup
        .string()
        .required('first-name-is-required')
        .min(2, 'first-name-must-be-at-least-2-characters-long')
        .max(20, 'first-name-must-be-at-most-20-characters-long'),
    lastName: yup
        .string()
        .required('last-name-is-required')
        .min(2, 'last-name-must-be-at-least-2-characters-long')
        .max(20, 'last-name-must-be-at-most-20-characters-long'),
    email: yup
        .string()
        .matches(emailRegex, 'email-is-not-valid')
        .required('email-is-required'),
    password: yup
        .string()
        .required('password-is-required')
        .matches(passwordRegex, 'password-regex-requirements')
        .min(8, 'password-must-be-at-least-8-characters-long'),
    confirmPassword: yup
        .string()
        .required('confirm-password-is-required')
        .oneOf([yup.ref("password")], 'password-and-confirm-password-must-match'),
    img: yup
        .string()
        .default('/img/noavatar.png'),
    isAdmin: yup
        .boolean()
        .default(false)
}

export const userLoginSchema: yup.ObjectSchema<IUserLoginYupSchema> = yup.object().shape(userLoginSchemaShape);

export const userSchema: yup.ObjectSchema<IUserYupSchema> = yup.object().shape(userSchemaShape);

export default userSchema
