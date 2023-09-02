import { IUser } from '@/models/User'
import { emailRegex, passwordRegex } from '@/utils/regex';
import * as yup from 'yup'

interface UserYupSchema extends Omit<IUser, "_id" | 'createdAt' | "updatedAt" | "isAdmin"> {
    password: string;
    confirmPassword: string;
}

interface UserLoginYupSchema {
    username: string;
    password: string;
}

const userLoginSchemaShape = {
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required')
}

const userSchemaShape = {
    username: yup
        .string()
        .required('Username is required')
        .min(6, 'First Name must be at least 6 characters long')
        .max(20, 'First Name must be at most 20 characters long'),
    firstName: yup
        .string()
        .required('First name is required')
        .min(2, 'Last Name must be at least 2 characters long')
        .max(20, 'Last Name must be at most 20 characters long'),
    lastName: yup
        .string()
        .required('Last name is required')
        .min(2, 'Username must be at least 2 characters long')
        .max(20, 'Username must be at most 20 characters long'),
    email: yup
        .string()
        .matches(emailRegex, 'Email is not valid')
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .matches(passwordRegex, 'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter and one number')
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

export const userLoginSchema: yup.ObjectSchema<UserLoginYupSchema> = yup.object().shape(userLoginSchemaShape);

export const userSchema: yup.ObjectSchema<UserYupSchema> = yup.object().shape(userSchemaShape);

export default userSchema
