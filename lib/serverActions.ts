"use server"
import Post, { IPost } from "@/models/Post";
import dbConnect from "./dbConnect";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import User, { IUser } from "@/models/User";
import { ILoginFormData } from "@/components/Forms/LoginForm";
import { IRegisterFormData } from "@/components/Forms/RegisterForm";
import { IPostFormData } from "@/components/Forms/AddEditPostForm";

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
        return { error: "Something went wrong!" }
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
        console.log(error);
        return { error: "Something went wrong!" }
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
        console.log(error);
        return { error: "Something went wrong!" }
    }
}

export const likePost = async (userId: IUser['_id'], postId: IPost['_id']) => {

    try {
        dbConnect();

        const post = await Post.findById(postId);

        if (!post) {
            return { error: "Post not found!" }
        }

        post.likes.push(userId);
        await post.save();

        revalidatePath('/blog');
        revalidatePath(`/blog/${postId}`);

        return { ok: true, message: 'Post has been liked!'}
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" }
    }
}

export const unlikePost = async (userId: IUser['_id'], postId: IPost['_id'] ) => {

    try {
        dbConnect();

        const post = await Post.findById(postId);

        if (!post) {
            return { error: "Post not found!" }
        }

        post.likes = post.likes.filter((like: IUser['_id']) => like != userId);
        await post.save();

        revalidatePath('/blog');
        revalidatePath(`/blog/${postId}`);

        return { ok: true, message: 'Post has been unliked!'}
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" }
    }
}

// Auth/User actions
export const handleLogout = async () => {
    await signOut();
}

export const registerUser = async (formData: IRegisterFormData) => {
    const { username, firstName, lastName, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
        return { error: "Passwords do not match!" }
    }

    try {
        dbConnect();

        const user = await User.findOne({ username })

        if (user) {
            return { error: "User already exists!" }
        }

        const newUser = await new User({ username, firstName, lastName, email, password });

        await newUser.save();
        await signIn("credentials", { username, password });
        console.log('User registered successfully');

        // return Response.json({ message: 'User registered successfully' })

    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" }
    }
}

export const loginUser = async (formData: ILoginFormData) => {
    const { username, password } = formData;

    try {
        dbConnect();

        await signIn("credentials", { username, password });

        console.log('User signed in successfully');
    } catch (error) {
        console.log('error', error);

        if (error instanceof Error && error.message.includes('CredentialsSignin')) {
            return { error: 'Invalid username or password!' }
        }

        throw error;
    }
}

export const addUser = async (formData: IRegisterFormData) => {
    const { username, firstName, lastName, email, password, confirmPassword, img, isAdmin } = formData;

    try {
        dbConnect();
        if (password !== confirmPassword) {
            return { error: "Passwords do not match!" }
        }

        const newUser = new User({ username, firstName, lastName, email, password, img, isAdmin });

        await newUser.save();
        revalidatePath('/admin');

        return { ok: true, message: 'User has been created!' }
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" }
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

        if(userId === currentUserId) {
            await signOut();
        }

        revalidatePath('/admin');

        return { ok: true, message: 'User has been deleted!' }
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!" }
    }
}