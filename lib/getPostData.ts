import Post, { IPost } from "@/models/Post";
import { IdType } from "@/types/common-types";
import dbConnect from "./dbConnect";
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

