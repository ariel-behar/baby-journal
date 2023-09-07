import Image from "next/image"
import { Suspense } from "react"

import { IPost } from "@/models/Post"

import PostUser from "@/components/Blog/BlogPostUser"
import { auth } from "@/lib/auth"
import { Session } from "next-auth"
import BlogPostOwnerButtons from "./BlogPostOwnerButtons"
import BlogPostPublished from "./BlogPostPublished"


interface Props {
    post: IPost
}

async function BlogPost({
    post
}: Props) {
    const session: Session | null = await auth()

    return (
        <div className="flex gap-[100px] py-5">

            {post && (
                <div className="hidden md:block flex-1 relative h-[calc(100vh-200px)]">
                    <Image src={post.img} alt='Post' fill className="object-cover" />
                </div>
            )}

            <div className="flex-[2] flex flex-col gap-[50px]">
                <h1 className="text-[64px]">{post.title}</h1>

                <div className="flex flex-row justify-between items-center">
                    <div className="relative flex gap-[20px]">
                        {post && (
                            <Suspense fallback={<div>Loading...</div>}>
                                <PostUser userId={post.userId} />
                            </Suspense>
                        )}

                        <BlogPostPublished createdAt={post.createdAt} />
                    </div>

                    {session?.user?.id == post.userId && (
                        <BlogPostOwnerButtons post={post} />
                    )}
                </div>

                <div>
                    <p className="text-xl">
                        {post?.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogPost