import { IPost } from "@/models/Post"

interface Props {
    post: IPost
}

function BlogPostOwnerButtons({
    post
}: Props) {
    return (
        <div className="flex gap-3">
            <button className="btn btn-sm btn-primary">Edit</button>
            <button className="btn btn-sm btn-error">Delete</button>
        </div>
    )
}

export default BlogPostOwnerButtons