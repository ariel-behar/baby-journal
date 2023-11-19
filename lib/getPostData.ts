import { unstable_noStore as noStore } from "next/cache";
import mongoose from "mongoose";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect";

import dbConnect from "./dbConnect";

import { IdType } from "@/types/common-types";

import { IUser } from "@/models/User";
import Post, { IPost, IPostPopulated } from "@/models/Post";
import { NotFoundError } from "@/models/Error";

export const getPost = async (postId: IdType) => {
    noStore();

    try {
        dbConnect();

        if (mongoose.Types.ObjectId.isValid(postId)) {
            const post: IPost | null = await Post.findById(postId);

            if(!post) {
                throw new NotFoundError('Post not found!')
            }

            return JSON.parse(JSON.stringify(post));
        } else {
            redirect('/journal');
        }

    } catch (error) {
        if(isRedirectError(error)){
            redirect('/journal');
        }
        throw error
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

        if(!posts){
            throw new NotFoundError('Failed to fetch posts!')
        }

        return JSON.parse(JSON.stringify(posts));
    } catch (error) {
        throw error;
    }
}

