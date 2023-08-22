import dbConnect from "@/lib/dbConnect";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        dbConnect();

        const posts = await Post.find().lean();

        return NextResponse.json(posts);
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to fetch posts!"})
    }
}