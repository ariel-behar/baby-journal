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
        .required('Email is required'),
    password: yup
        .string()
        .required('Password is required')
}

const userSchemaShape = {
    firstName: yup
        .string()
        .required('First name is required')
        .min(2, 'First name must be at least 2 characters long')
        .max(20, 'First name must be at most 20 characters long'),
    lastName: yup
        .string()
        .required('Last name is required')
        .min(2, 'Last name must be at least 2 characters long')
        .max(20, 'Last name must be at most 20 characters long'),
    email: yup
        .string()
        .matches(emailRegex, 'Email is not valid')
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .matches(passwordRegex, 'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number and one special character')
        .min(8, 'Password must be at least 8 characters long'),
    confirmPassword: yup
        .string()
        .required("Confirm Password is required")
        .oneOf([yup.ref("password")], "Password and Confirm Password must match"),
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
