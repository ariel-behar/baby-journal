import * as yup from 'yup';

import { emailRegex } from "@/utils/regex";
import { IContactFormData } from '@/components/Forms/ContactForm';

export interface IContactFormYupSchema extends IContactFormData {}

const contactFormSchemaShape = {
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
    message: yup
        .string()
        .required('message-is-required')
        .min(50, 'message-must-be-at-least-50-characters-long')
        .max(500, 'message-must-be-at-most-500-characters-long'),
}

const contactFormSchema: yup.ObjectSchema<IContactFormYupSchema> = yup.object().shape(contactFormSchemaShape);

export default contactFormSchema;