import Post, { IPost, IPostPopulated } from "@/models/Post";
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

export const getPosts = async (populateUser: boolean, userId?: IUser['_id']) => {
    noStore();

    try {
        dbConnect();

        let posts: IPostPopulated[] | IPost[];

        if (userId) {
            if (populateUser) {
                posts = await Post.find({ user: userId }).populate("user").lean();
            } else {
                posts = await Post.find({ user: userId }).lean();
            }

        } else {
            if (populateUser) {
                posts = await Post.find().populate("user").lean();
            } else {
                posts = await Post.find().lean();
            }

        }

        return posts;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch posts!');
    }
}

