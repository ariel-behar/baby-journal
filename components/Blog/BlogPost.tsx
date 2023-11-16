import Image from "next/image"
import { Suspense } from "react"
import { Session } from "next-auth"

import { IPost } from "@/models/Post"

import { auth } from "@/lib/auth"
import { ICustomSession } from "@/types/types"

import BlogPostOwnerButtons from "./BlogPostOwnerButtons"
import LikeButton from "../Buttons/LikeButton"
import LikeCounter from "./LikeCounter"
import BlogPostAuthorPublished from "@/components/Blog/BlogPostAuthorPublished"

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

            {/* Post image from large screens onwards */}
            {post && (
                <div className="hidden lg:block flex-1 relative h-[calc(90vh-200px)]">
                    <Image src={post.img} alt='Post' fill className="object-cover" />
                </div>
            )}

            <div className="flex-[2] flex flex-col gap-y-7 md:gap-[50px]">

                <h1 className="text-5xl md:text-7xl mt-2 md:mt-0 mb-0">{post.title}</h1>

                {/* Post image from extra small to medium screens */}
                {post && (
                    <div className="block lg:hidden relative h-[300px] w-full">
                        <Image src={post.img} alt='Post' fill className="object-cover" />
                    </div>
                )}

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-y-5">

                    <div className="flex flex-row items-center justify-between md:justify-end ">
                        <div className="flex flex-row items-center gap-2">
                            {!(user?.id == postUserId) && <LikeButton post={post} user={user as ICustomSession['user']} />}
                            <LikeCounter likes={post.likes} />
                        </div>

                        <div className="md:hidden">
                            {user?.id == postUserId
                                ? <BlogPostOwnerButtons post={post} />
                                : user?.isAdmin && <BlogPostOwnerButtons post={post} />
                            }
                        </div>
                    </div>

                    {post && (
                        <Suspense fallback={<div>Loading...</div>}>
                            <BlogPostAuthorPublished post={post} />
                        </Suspense>
                    )}

                    <div className="hidden md:flex flex-row justify-end ">
                        {user?.id == postUserId
                            ? <BlogPostOwnerButtons post={post} />
                            : user?.isAdmin && <BlogPostOwnerButtons post={post} />
                        }
                    </div>
                </div>

                <p className="text-xl mb-3">
                    {post?.description}
                </p>
            </div>
        </div>
    )
}

export default BlogPost