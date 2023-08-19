import { IPost } from "@/models/Post"
import { IUser } from "@/models/User";

import { getUser } from "@/lib/getData";

interface Props extends Omit<IPost, 'title' | 'body' | 'id'> {}

async function PostUser({
    userId
}:Props) {
    const user: IUser | undefined = await getUser(Number(userId));

    return (
        <div className="flex flex-col gap-[10px]">
            <span className="text-gray-500 font-bold">Author</span>
            <span className="font-medium">{user.name}</span>
        </div>
    )
}

export default PostUser