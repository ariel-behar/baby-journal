"use server"
import { revalidatePath } from "next/cache";
import nodemailer from 'nodemailer'
import { signIn, signOut } from "./auth";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";
import { ObjectSchema } from "yup";
import { getTranslations } from "next-intl/server";

import dbConnect from "./dbConnect";

import Post, { IPost } from "@/models/Post";
import User, { IUser } from "@/models/User";
import { InvalidDataError, InvalidLoginCredentialsError, NotFoundError } from "@/models/Error";

import contactFormSchema from "@/validation/contactFormSchema";

import { ILoginFormData } from "@/components/Forms/LoginForm";
import { IRegisterFormData } from "@/components/Forms/RegisterForm";
import { IContactFormData } from "@/components/Forms/ContactForm";
import { IPostFormData } from "@/components/Forms/AddEditPostForm";

// Post actions
export const addPost = async (formData: IPostFormData) => {
    const { title, description, user, img } = formData;
    const t = await getTranslations("Notifications");

    try {
        dbConnect();

        const newPost = new Post({ title, description, img, user });

        await newPost.save();

        console.log('Post has been created!');
        revalidatePath('/journal');
        revalidatePath('/dashboard');
        revalidatePath('/admin');

        return { ok: true, message: t('post-has-been-created') }
    } catch (error) {
        throw error;
    }
}

export const editPost = async (postId: IPost['_id'], formData: IPostFormData) => {
    const { title, description, user, img } = formData;
    const t = await getTranslations("Notifications");

    try {
        dbConnect();

        await Post.findByIdAndUpdate(postId, { title, description, img, user });
        
        console.log(`Post (_id: ${postId}) has been modified!`);

        revalidatePath('/journal');
        revalidatePath('/dashboard');
        revalidatePath('/admin');

        return { ok: true, message: t('post-has-been-modified') }
    } catch (error) {
        throw error;
    }
}

export const deletePost = async (formData: FormData | IPost['_id']) => {
    // "use server"
    const t = await getTranslations("Notifications");

    const postId = typeof formData === 'string'
        ? formData
        : Object.fromEntries(formData).postId;

    try {
        dbConnect();

        const post = await Post.findByIdAndDelete(postId);

        if (!post) throw new NotFoundError(t('post-not-found'));

        console.log(`Post (_id: ${postId}) has been deleted!`);

        revalidatePath('/journal');
        revalidatePath('/admin');

        return { ok: true, message: t('post-has-been-deleted') }
    } catch (error) {
        throw error;
    }
}

export const likePost = async (userId: IUser['_id'], postId: IPost['_id']) => {
    const t = await getTranslations("Notifications");

    try {
        dbConnect();

        const post = await Post.findById(postId);

        if (!post) {
            throw new NotFoundError(t('post-not-found'))
        }

        post.likes.push(userId);
        await post.save();

        revalidatePath('/journal');
        revalidatePath(`/journal/${postId}`);

        return { ok: true, message: t('post-has-been-liked') }
    } catch (error) {
        throw error;
    }
}

export const unlikePost = async (userId: IUser['_id'], postId: IPost['_id']) => {
    const t = await getTranslations("Notifications");

    try {
        dbConnect();

        const post = await Post.findById(postId);

        if (!post) {
            throw new NotFoundError(t('post-not-found'))
        }

        post.likes = post.likes.filter((like: IUser['_id']) => like != userId);
        await post.save();

        revalidatePath('/journal');
        revalidatePath(`/journal/${postId}`);

        return { ok: true, message: t('post-has-been-unliked') }
    } catch (error) {
        throw error;
    }
}

// Auth/User actions
export const handleLogout = async () => {
    await signOut();
}

export const registerUser = async (formData: IRegisterFormData) => {
    const { firstName, lastName, email, password, confirmPassword } = formData;
    const t = await getTranslations("Notifications");

    if (password !== confirmPassword) {

        throw new InvalidDataError(t('passwords-do-not-match'))
    }

    try {
        dbConnect();

        const user = await User.findOne({ email })

        if (user) {
            throw new Error(t('user-already-exists'))
        }

        await new User({ firstName, lastName, email, password }).save();

        await signIn("credentials", { email, password, redirect: false });

        redirect('/')
        // return { ok: true, message: t('user-has-been-registered') }

    } catch (error) {
        if (isRedirectError(error)) {
            redirect('/');
        }
        throw error
    }
}

export const loginUser = async (formData: ILoginFormData) => {
    const { email, password } = formData;
    const t = await getTranslations("Notifications");

    try {
        dbConnect();

        await signIn("credentials", { email, password });

        return { ok: true, message: t('user-has-successfully-logged-in') }
    } catch (error) {
        if (isRedirectError(error)) {
            redirect('/')
        } else {
            throw new InvalidLoginCredentialsError();
        }
    }
}

export const addUser = async (formData: IRegisterFormData) => {
    const { firstName, lastName, email, password, confirmPassword, img, isAdmin } = formData;
    const t = await getTranslations("Notifications");

    try {
        dbConnect();
        if (password !== confirmPassword) {
            throw new InvalidDataError(t('passwords-do-not-match'))
        }

        const newUser = new User({ firstName, lastName, email, password, img, isAdmin });

        await newUser.save();
        revalidatePath('/admin');

        return { ok: true, message: t('user-has-been-registered') }
    } catch (error) {
        throw error;
    }
}

export const deleteUser = async (formData: FormData | IUser['_id'], currentUserId: IUser['_id']) => {
    const t = await getTranslations("Notifications");

    const userId = typeof formData === 'string'
        ? formData
        : Object.fromEntries(formData)._id;

    try {
        dbConnect();

        await Post.deleteMany({ user: userId });
        await User.findByIdAndDelete(userId);

        if (userId === currentUserId) {
            await signOut();
        }

        revalidatePath('/admin');

        return { ok: true, message: t('user-has-been-deleted') }
    } catch (error) {
        throw error;
    }
}

// Contact actions
export const sendContactMessage = async (formData: IContactFormData) => {
    const t = await getTranslations("Notifications");

    const body: IContactFormData = formData;

    try {
            await (contactFormSchema as ObjectSchema<IContactFormData>).camelCase().validate(body, {
                abortEarly: false,
                strict: true
            });

            const { firstName, lastName, email, message } = body;

            const transporter = nodemailer.createTransport({
                service: 'hotmail',
                host: process.env.EMAIL_HOST,
                port: 587,
                secure: false,
                auth: {
                    user: process.env.EMAIL_FROM,
                    pass: process.env.EMAIL_FROM_PASSWORD,
                },
                from: process.env.EMAIL_FROM,
                tls: {
                    rejectUnauthorized: false,
                },
            });

            const output = `
                <h2>You have a new contact form submission on Baby Journal!</h2>
                <h3>Submission Details</h3>
                <ul>
                    <li><b>Name:</b> ${firstName} ${lastName}</li>
                    <li><b>Email address:</b> ${email}</li>
                    <li><b>Message:</b> ${message}</li>
                </ul>`;


            const options = {
                from: `Baby Journal <${process.env.EMAIL_FROM}>`,
                to: process.env.EMAIL_TO,
                subject: 'Baby Journal contact form submission',
                text: 'Baby Journal contact form submission',
                html: output,
            }

            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                } else {
                    console.log("Server is ready to take our messages");
                }
            });

            const info = await transporter.sendMail(options);

            if (info) {
                console.log(`Message sent successfully: %s ${info.messageId}`);
                return { ok: true, message: `Message sent successfully!` };
            } else {
                throw new Error(t('an-error-occurred-while-attempting-to-process-your-message'));
            }
        } catch (error) {
            console.log('error:', error)
            throw error;
        }
    }