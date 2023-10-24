import Image from "next/image"

import { IPost } from "@/models/Post"
import { IUser } from "@/models/User";

import { getUser } from "@/lib/getUserData";

interface Props {
    postUserId: IPost['user']
 }

async function BlogPostUser({
    postUserId
}: Props) {
    const user: IUser | null = await getUser(postUserId as string);

    return (
        <div className="flex items-center gap-5">
            <Image src={user?.img ? user?.img : "/img/noavatar.png"} alt='User image' width={50} height={50} className="object-cover rounded-[50%] h-[50px] w-[50px]" />

            <div className="flex flex-col gap-[10px]">
                <span className="text-gray-500 font-bold">Author</span>
                <span className="font-medium">{user?.firstName} {user?.lastName}</span>
            </div>
        </div>
    )
}

export default BlogPostUser