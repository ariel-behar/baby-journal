import Image from "next/image"

import { IPost } from "@/models/Post"
import { IUser } from "@/models/User";

import { getUser } from "@/lib/getData";

interface Props extends Partial<IPost> { }

async function PostUser({
    userId
}: Props) {
    const user: IUser | null = await getUser(userId as string);

    return (
        <div className="flex items-center gap-5">
            <Image src={user?.avatarImg ? user?.avatarImg : "https://images.pexels.com/photos/18505361/pexels-photo-18505361/free-photo-of-woman-in-avatar-cosplay.jpeg"} alt='User image' width={50} height={50} className="object-cover rounded-[50%] h-[50px] w-[50px]" />

            <div className="flex flex-col gap-[10px]">
                <span className="text-gray-500 font-bold">Author</span>
                <span className="font-medium">{user?.username}</span>
            </div>
        </div>
    )
}

export default PostUser