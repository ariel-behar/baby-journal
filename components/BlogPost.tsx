import Image from "next/image"
import { format } from "date-fns"
import { Suspense } from "react"

import { IPost } from "@/models/Post"

import PostUser from "@/components/BlogPostUser"


interface Props {
    post: IPost
}

function BlogPost({
    post
}: Props) {

    return (
        <div className="flex gap-[100px] py-5">
            {
                post && (
                    <div className="hidden md:block flex-1 relative h-[calc(100vh-200px)]">
                        <Image src={post.img} alt='Post' fill className="object-cover" />
                    </div>
                )
            }

            <div className="flex-[2] flex flex-col gap-[50px]">
                <h1 className="text-[64px]">{post.title}</h1>

                <div className="relative flex gap-[20px]">
                    {
                        post && (
                            <Suspense fallback={<div>Loading...</div>}>
                                <PostUser userId={post.userId} />
                            </Suspense>
                        )
                    }
                    <div className="flex flex-col gap-[10px]">
                        <span className="text-gray-500 font-bold">
                            Published
                        </span>
                        <span className="font-medium">
                            {format(new Date(post.createdAt as string), "dd MMM yyyy")}
                        </span>
                    </div>
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