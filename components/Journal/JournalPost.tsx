import Image from "next/image"
import { Suspense } from "react"
import { getTranslations } from "next-intl/server"
import { Session } from "next-auth"

import { IPost } from "@/models/Post"

import { auth } from "@/lib/auth"
import { ICustomSession } from "@/types/types"

import JournalPostOwnerButtons from "./JournalPostOwnerButtons"
import LikeButton from "../Buttons/LikeButton"
import LikeCounter from "./LikeCounter"
import JournalPostAuthorPublished from "@/components/Journal/JournalPostAuthorPublished"
import NotLoggedInLikeButton from "../Buttons/NotLoggedInLikeButton"

interface Props {
    post: IPost
}

async function JournalPost({
    post
}: Props) {
    const t = await getTranslations()
    const session: Session | null = await auth()
    const user: ICustomSession['user'] = (session as ICustomSession)?.user;
    const postUserId = post.user;

    return (
        <article className="flex flex-col items-center px-2 ">

            <div className="flex flex-col items-center gap-y-3 sm:gap-y-7 lg:gap-y-[50px] w-full max-w-[1100px]">

                {/* Post title */}
                <h2 className="large-title mt-2 md:mt-0 mb-0">{post.title}</h2>

                {/* Author/Post Details small screens*/}
                <div className="block lg:hidden">
                    {post && (
                        <Suspense fallback={<div>{t('Common.loading')}</div>}>
                            <JournalPostAuthorPublished post={post} />
                        </Suspense>
                    )}
                </div>

                {/* Container image and all items except description */}
                <div className="flex flex-col items-center lg:items-start gap-y-3  lg:flex-row lg:gap-x-7 lg:justify-between w-full">
                    {/* Post image */}
                    {post && (
                        <figure className="relative h-[200px] sm:h-[300px] md:h-[400px] lg:h-[300px] xl:h-[400px] w-full">
                            <Image src={post.img} alt='Post' fill className="object-scale-down object-center" sizes="(max-width: 1023px) 100vw, 50vw" />
                        </figure>
                    )}

                    <div className="flex lg:flex-col lg:gap-y-5 min-w-[350px] lg:pt-5">
                        {/* Author/Post Details large screens onward*/}
                        <div className="hidden lg:block">
                            {post && (
                                <Suspense fallback={<div>{t('Common.loading')}</div>}>
                                    <JournalPostAuthorPublished post={post} />
                                </Suspense>
                            )}
                        </div>

                        <div className="flex flex-row items-center justify-between min-w-full px-5">
                            {/* Like Button and Like Counter */}
                            <div className="flex flex-row items-center gap-2">
                                {
                                    user
                                        ? !(user?.id == postUserId) && <LikeButton post={post} user={user as ICustomSession['user']} />
                                        : <NotLoggedInLikeButton />
                                }

                                {
                                    !(user?.id == postUserId)
                                        ? <LikeCounter isPostOwner={user?.id == postUserId} likes={post.likes} />
                                        : <p className="text-muted text-sm ">{t('you-are-the-author-of-this-post')}</p>
                                }
                            </div>

                            {/* Owner buttons */}
                            <div>
                                {user?.id == postUserId
                                    ? <JournalPostOwnerButtons post={post} />
                                    : user?.isAdmin && <JournalPostOwnerButtons post={post} />
                                }
                            </div>
                        </div>


                    </div>
                </div>

                {/* Post Description */}
                <p className="mb-3">
                    {post?.description}
                </p>
            </div>
        </article>
    )
}

export default JournalPost