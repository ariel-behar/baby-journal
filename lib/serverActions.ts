"use server"
import Post from "@/models/Post";
import dbConnect from "./dbConnect";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";

export const addPost = async (formData: FormData) => {
    // "use server"

    const { title, description, userId, img } = Object.fromEntries(formData);

    try {
        dbConnect();
        const newPost = new Post({ title, description, img, userId });

        await newPost.save();
        console.log('Post added successfully');
        revalidatePath('/blog');
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!"}
    }
}

export const deletePost = async (formData: FormData) => {
    // "use server"

    const { postId } = Object.fromEntries(formData);

    try {
        dbConnect();

        await Post.findByIdAndDelete(postId);

        console.log('Post delete successfully');
        revalidatePath('/blog');
    } catch (error) {
        console.log(error);
        return { error: "Something went wrong!"}
    }
}

export const handleGithubLogin = async () => {
    await signIn("github");
}

export const handleLogout = async () => {
    await signOut();
}
