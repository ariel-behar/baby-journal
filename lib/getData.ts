import Post, { IPost } from "@/models/Post";
import { IdType } from "@/types/common-types";
import dbConnect from "./dbConnect";
import User, { IUser } from "@/models/User";
import { unstable_noStore as noStore } from "next/cache";

export const getPost = async (postId: IdType) => {
    noStore();
    
    try {
        dbConnect();

        const post:IPost | null = await Post.findById(postId);

        return post;
    } catch(error) {
        console.error(error);
        throw new Error('Failed to fetch post!');
    }
}

export const getPosts = async () => {
    noStore();

    try {
        dbConnect();

        const posts:IPost[] = await Post.find().lean();

        return posts;
    } catch(error) {
        console.error(error);
        throw new Error('Failed to fetch posts!');
    }
}

export const getUser = async (userId: IdType) => {
    try {
        dbConnect();

        const user:IUser | null = await User.findById(userId);

        return user;
    } catch(error) {
        console.error(error);
        throw new Error('Failed to fetch user data!');
    }
}

export const getUsers = async () => {
    try {
        dbConnect();

        const users:IUser[] = await User.find().lean();

        return users;
    } catch(error) {
        console.error(error);
        throw new Error('Failed to fetch users!');
    }
}
