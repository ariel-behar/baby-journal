import Image from "next/image"
import { Suspense } from "react"

import { IPost } from "@/models/Post"

import PostUser from "@/components/Blog/BlogPostUser"
import { auth } from "@/lib/auth"
import { Session } from "next-auth"
import BlogPostOwnerButtons from "./BlogPostOwnerButtons"
import BlogPostPublished from "./BlogPostPublished"
import LikeButton from "../Buttons/LikeButton"
import { ICustomSession } from "@/types/types"

interface Props {
    post: IPost
}

async function BlogPost({
    post
}: Props) {
    const session: Session | null = await auth()
    const user: ICustomSession['user'] = (session as ICustomSession)?.user;
    const postUserId = post.user;

    return (
        <div className="flex gap-[100px]">

            {post && (
                <div className="hidden md:block flex-1 relative h-[calc(100vh-200px)]">
                    <Image src={post.img} alt='Post' fill className="object-cover" />
                </div>
            )}

            <div className="flex-[2] flex flex-col gap-[50px]">
                <h1 className="text-[64px]">{post.title}</h1>

                <div className="flex flex-row justify-between items-start">
                    <div className="relative flex gap-[20px]">
                        {post && (
                            <Suspense fallback={<div>Loading...</div>}>
                                <PostUser postUserId={postUserId} />
                            </Suspense>
                        )}

                        <BlogPostPublished createdAt={post.createdAt} />
                    </div>

                    {user?.id == postUserId
                        ? <BlogPostOwnerButtons post={post} />
                        : user?.isAdmin
                            ? (
                                <div className="flex gap-[15px]">

                                    <LikeButton post={post} user={user as ICustomSession['user']} />
                                    <BlogPostOwnerButtons post={post} />
                                </div>
                            )
                            : <LikeButton post={post} user={user as ICustomSession['user']} />
                    }
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