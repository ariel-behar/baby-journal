import * as yup from 'yup';

import { emailRegex } from "@/utils/regex";
import { IContactFormData } from '@/components/Forms/ContactForm';

export interface IContactFormYupSchema extends IContactFormData {}

const contactFormSchemaShape = {
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
    message: yup
        .string()
        .required('Message is required')
        .min(50, 'Message must be at least 50 characters long')
        .max(500, 'Message must be at most 500 characters long'),
}

const contactFormSchema: yup.ObjectSchema<IContactFormYupSchema> = yup.object().shape(contactFormSchemaShape);

export default contactFormSchema;