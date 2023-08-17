import { Post } from "@/models/Post"
import { User } from "@/models/User";

const getData = async (userId: User['id']) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, { cache: 'no-store'});

	if(!res.ok) {
		throw new Error('Something went wrong');
	}

	return res.json();
}

interface Props extends Omit<Post, 'title' | 'body' | 'id'> {}

async function PostUser({
    userId
}:Props) {
    const user: User = await getData(userId);

    return (
        <div className="flex flex-col gap-[10px]">
            <span className="text-gray-500 font-bold">Author</span>
            <span className="font-medium">{user.name}</span>
        </div>
    )
}

export default PostUser