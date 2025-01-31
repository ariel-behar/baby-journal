import Image from "next/image"
import { getTranslations } from "next-intl/server";

import { IUser } from "@/models/User";
import { format } from "date-fns/format";

interface Props {
    user: Partial<IUser>
}

async function UserProfile({
    user
}: Props) {
    const t = await getTranslations("ProfilePage")

    return (
        <article className="flex flex-col items-center bg-dark-soft rounded-lg py-5 px-10">
            <div className="avatar my-5">
                <figure className="mask mask-squircle w-[150px] lg:w-[300px] h-[150px] lg:h-[300px] relative">
                    <Image src={user?.img || "/img/noavatar.png"} alt="avatar" fill sizes="33vw" />
                </figure>
            </div>

            <h4 className="text-2xl">{user?.firstName} {user?.lastName}</h4>
            <p className="text-muted">{user?.isAdmin ? `${t('admin')}` : `${t('user')}`}</p>

            <div className="py-10 flex flex-col gap-y-1">
                <p>
                    {t('member-since')}&nbsp;
                    <time className="font-bold">{format(new Date(user?.createdAt as string), "dd MMM yyyy")}</time>
                </p>
                <p>
                    {t('email')}&nbsp;
                    <span className="font-bold">{user?.email}</span>
                </p>

            </div>
        </article>
    )
}

export default UserProfile