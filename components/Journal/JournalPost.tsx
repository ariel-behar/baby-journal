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
        <article className="flex gap-[100px] px-2">

            {/* Post image from large screens onwards */}
            {post && (
                <figure className="hidden lg:block flex-1 relative h-[calc(90vh-200px)]">
                    <Image src={post.img} alt='Post' fill className="object-cover" />
                </figure>
            )}

            <div className="flex-[2] flex flex-col gap-y-7 md:gap-[50px]">

                <h1 className="text-5xl md:text-7xl mt-2 md:mt-0 mb-0">{post.title}</h1>

                {/* Post image from extra small to medium screens */}
                {post && (
                    <figure className="block lg:hidden relative h-[300px] w-full">
                        <Image src={post.img} alt='Post' fill className="object-cover" />
                    </figure>
                )}

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-y-5">

                    <div className="flex flex-row items-center justify-between md:justify-end ">
                        <div className="flex flex-row items-center gap-2">
                            {!(user?.id == postUserId) && <LikeButton post={post} user={user as ICustomSession['user']} />}
                            <LikeCounter likes={post.likes} />
                        </div>

                        <div className="md:hidden">
                            {user?.id == postUserId
                                ? <JournalPostOwnerButtons post={post} />
                                : user?.isAdmin && <JournalPostOwnerButtons post={post} />
                            }
                        </div>
                    </div>

                    {post && (
                        <Suspense fallback={<div>{t('Common.loading')}</div>}>
                            <JournalPostAuthorPublished post={post} />
                        </Suspense>
                    )}

                    <div className="hidden md:flex flex-row justify-end ">
                        {user?.id == postUserId
                            ? <JournalPostOwnerButtons post={post} />
                            : user?.isAdmin && <JournalPostOwnerButtons post={post} />
                        }
                    </div>
                </div>

                <p className="text-xl mb-3">
                    {post?.description}
                </p>
            </div>
        </article>
    )
}

export default JournalPost