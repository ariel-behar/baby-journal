import { Post } from "@/models/Post"
import { User } from "@/models/User";

import { getUser } from "@/lib/getData";

interface Props extends Omit<Post, 'title' | 'body' | 'id'> {}

async function PostUser({
    userId
}:Props) {
    const user = await getUser(Number(userId)) as User;

    return (
        <div className="flex flex-col gap-[10px]">
            <span className="text-gray-500 font-bold">Author</span>
            <span className="font-medium">{user.name}</span>
        </div>
    )
}

export default PostUser