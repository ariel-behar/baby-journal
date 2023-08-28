
import { addPost } from "@/lib/serverActions"
import { IUser } from "@/models/User"

interface Props {
    userId: IUser['_id']
}

async function AdminPostForm({
    userId
}:Props) {
    

    return (
        <div className="w-[500px] bg-darkSoft p-3 text-center rounded-md ">
            <form action={addPost} className="flex flex-col gap-3">
                <h1>Add new Post</h1>
                <input className="form-input" type="text" placeholder="title" name="title" />
                <input className="form-input" type="text" placeholder="description" name="description" />
                <input type="hidden" className="form-input" placeholder="userId" name="userId" value={userId} />
                <input className="form-input" type="text" placeholder="image" name="img" />
                <button type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default AdminPostForm