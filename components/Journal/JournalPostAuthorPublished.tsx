import { getTranslations } from "next-intl/server";
import Image from "next/image"

import { IPost } from "@/models/Post"
import { IUser } from "@/models/User";

import { getUser } from "@/lib/getUserData";

import JournalPostPublished from "./JournalPostPublished";

interface Props {
    post: IPost
}

async function JournalPostAuthorPublished({
    post,
}: Props) {
    const t = await getTranslations()
    const user: IUser | null = await getUser(post.user as string);

    return (
        <div className="relative flex flex-row justify-start md:justify-between gap-[20px]">
            <Image src={user?.img ? user?.img : "/img/noavatar.png"} alt={t('Common.user-image')} width={50} height={50} className="object-cover rounded-[50%] h-[50px] w-[50px]" />

            <div className="flex flex-col gap-[10px]">
                <span className="text-gray-500 font-bold">{t('JournalPage.author')}</span>
                <span className="font-medium">{user?.firstName} {user?.lastName}</span>
            </div>

            <JournalPostPublished createdAt={post.createdAt} />
        </div>
    )
}

export default JournalPostAuthorPublished