import { IPost } from "@/models/Post";
import { IdType } from "@/types/common-types";
import dbConnect from "./dbConnect";

export const getPosts = async () => {
    try {
        dbConnect();

        const posts = await Post.find();

    } catch(error) {
        console.error(error);
        throw new Error('Failed to fetch posts');
    }
}

export const getPost = async (postId: IdType) => {
    return posts.find(post => post.id === Number(postId));
}

export const getUser = async (userId: IdType) => {
    return users.find(user => user.id === Number(userId));
}

