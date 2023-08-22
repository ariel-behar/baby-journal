import dbConnect from "@/lib/dbConnect";
import Post, { IPost } from "@/models/Post";
import { type NextRequest, NextResponse } from "next/server";

interface Params {
    params: {
        postId: IPost['_id']
    }
}

export const GET = async (request: NextRequest, { params }: Params) => {
    const { postId } = params;

    try {
        dbConnect()

        const post = await Post.findById(postId)

        return NextResponse.json(post)
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to fetch post!"})
    }
}

