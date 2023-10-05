import Post, { IPost } from "@/models/Post";
import { IdType } from "@/types/common-types";
import dbConnect from "./dbConnect";
import { unstable_noStore as noStore } from "next/cache";
import { IUser } from "@/models/User";

export const getPost = async (postId: IdType) => {
    noStore();

    try {
        dbConnect();

        const post: IPost | null = await Post.findById(postId);

        return post;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch post!');
    }
}

export const getPosts = async (userId?: IUser['_id']) => {
    noStore();

    try {
        dbConnect();

        let posts: IPost[];

        if (userId) {
           posts = await Post.find({userId}).lean();
        } else {
            posts = await Post.find().lean();
        }

        return posts;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch posts!');
    }
}

