import { IPost } from "@/models/Post"
import { IUser } from "@/models/User";

import { getUser } from "@/lib/getData";

interface Props extends Partial<IPost> {}

async function PostUser({
    userId
}:Props) {
    const user: IUser | null = await getUser(userId as string);

    return (
        <div className="flex flex-col gap-[10px]">
            <span className="text-gray-500 font-bold">Author</span>
            <span className="font-medium">{user?.username}</span>
        </div>
    )
}

export default PostUser