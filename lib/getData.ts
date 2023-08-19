import Post, { IPost } from "@/models/Post";
import { IdType } from "@/types/common-types";
import dbConnect from "./dbConnect";
import User, { IUser } from "@/models/User";

export const getPost = async (postId: IdType) => {
    try {
        dbConnect();

        const post:IPost | never[] = await Post.find({ _id: postId });

        return post;
    } catch(error) {
        console.error(error);
        throw new Error('Failed to fetch post!');
    }
}

export const getPosts = async () => {
    try {
        dbConnect();

        const posts:IPost[] | [] = await Post.find();

        return posts;
    } catch(error) {
        console.error(error);
        throw new Error('Failed to fetch posts!');
    }
}

export const getUser = async (userId: IdType) => {
    try {
        dbConnect();

        const user:IUser | never[] = await User.find({ _id: userId });

        return user;
    } catch(error) {
        console.error(error);
        throw new Error('Failed to fetch user data!');
    }
}

export const getUsers = async () => {
    try {
        dbConnect();

        const users:IUser[] | [] = await User.find();

        return users;
    } catch(error) {
        console.error(error);
        throw new Error('Failed to fetch users!');
    }
}
