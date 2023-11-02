"use server"
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";

import dbConnect from "./dbConnect";

import Post, { IPost } from "@/models/Post";
import User, { IUser } from "@/models/User";

import { ILoginFormData } from "@/components/Forms/LoginForm";
import { IRegisterFormData } from "@/components/Forms/RegisterForm";
import { IPostFormData } from "@/components/Forms/AddEditPostForm";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";
import { InvalidDataError, InvalidLoginCredentialsError, NotFoundError } from "@/models/Error";

// Post actions
export const addPost = async (formData: IPostFormData) => {
    const { title, description, user, img } = formData;

    try {
        dbConnect();

        const newPost = new Post({ title, description, img, user });

        await newPost.save();

        console.log('Post added successfully');
        revalidatePath('/blog');
        revalidatePath('/dashboard');
        revalidatePath('/admin');

        return { ok: true, message: 'Post has been created!' }
    } catch (error) {
        throw error;
    }
}

export const editPost = async (postId: IPost['_id'], formData: IPostFormData) => {
    const { title, description, user, img } = formData;

    try {
        dbConnect();

        await Post.findByIdAndUpdate(postId, { title, description, img, user });
        console.log('Post edited successfully');

        revalidatePath('/blog');
        revalidatePath('/dashboard');
        revalidatePath('/admin');

        return { ok: true, message: 'Post has been modified!' }
    } catch (error) {
        throw error;
    }
}

export const deletePost = async (formData: FormData | IPost['_id']) => {
    // "use server"

    const postId = typeof formData === 'string'
        ? formData
        : Object.fromEntries(formData).postId;

    try {
        dbConnect();

        await Post.findByIdAndDelete(postId);

        console.log('Post deleted successfully');
        revalidatePath('/blog');
        revalidatePath('/admin');

        return { ok: true, message: 'Post has been deleted!' }
    } catch (error) {
        throw error;
    }
}

export const likePost = async (userId: IUser['_id'], postId: IPost['_id']) => {

    try {
        dbConnect();

        const post = await Post.findById(postId);

        if (!post) {
            throw new NotFoundError("Post not found!")
        }

        post.likes.push(userId);
        await post.save();

        revalidatePath('/blog');
        revalidatePath(`/blog/${postId}`);

        return { ok: true, message: 'Post has been liked!' }
    } catch (error) {
        throw error;
    }
}

export const unlikePost = async (userId: IUser['_id'], postId: IPost['_id']) => {

    try {
        dbConnect();

        const post = await Post.findById(postId);

        if (!post) {
            throw new NotFoundError("Post not found!")
        }

        post.likes = post.likes.filter((like: IUser['_id']) => like != userId);
        await post.save();

        revalidatePath('/blog');
        revalidatePath(`/blog/${postId}`);

        return { ok: true, message: 'Post has been unliked!' }
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

    if (password !== confirmPassword) {
        
        throw new InvalidDataError("Passwords do not match!")
    }

    try {
        dbConnect();

        const user = await User.findOne({ email })

        if (user) {
            throw new Error("User already exists!")
        }

        await new User({ firstName, lastName, email, password }).save();

        await signIn("credentials", { email, password, redirect: false });

        redirect('/')
        // return { ok: true, message: 'User has been registered!' }

    } catch (error) {
        if(isRedirectError(error)) {
            redirect('/');
        }
        throw error
    } 
}

export const loginUser = async (formData: ILoginFormData) => {
    const { email, password } = formData;

    try {
        dbConnect();

        await signIn("credentials", { email, password });

        return { ok: true, message: 'User has successfully logged in!' }
    } catch (error) {
        if(isRedirectError(error)) {
            redirect('/')
        } else {
            throw new InvalidLoginCredentialsError();
        }
    }
}

export const addUser = async (formData: IRegisterFormData) => {
    const { firstName, lastName, email, password, confirmPassword, img, isAdmin } = formData;

    try {
        dbConnect();
        if (password !== confirmPassword) {
            throw new InvalidDataError("Passwords do not match!")
        }

        const newUser = new User({ firstName, lastName, email, password, img, isAdmin });

        await newUser.save();
        revalidatePath('/admin');

        return { ok: true, message: 'User has been created!' }
    } catch (error) {
        throw error;
    }
}

export const deleteUser = async (formData: FormData | IUser['_id'], currentUserId: IUser['_id']) => {
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

        return { ok: true, message: 'User has been deleted!' }
    } catch (error) {
        throw error;
    }
}