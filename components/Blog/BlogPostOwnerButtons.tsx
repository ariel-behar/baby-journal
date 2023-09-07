"use client"
import { deletePost } from "@/lib/serverActions"
import { IPost } from "@/models/Post"

interface Props {
    post: IPost
}

function BlogPostOwnerButtons({
    post
}: Props) {

    const deletePostHandler = () => {
        const userConfirmation = window.confirm('Are you sure you want to delete this post?');

        if (userConfirmation) {
            deletePost(post._id);
        }
    }

    return (
        <div className="flex gap-3">
            <button className="btn btn-sm btn-primary">Edit</button>

            <form action={deletePostHandler}>
                <button className="btn btn-sm btn-error">Delete</button>
            </form>
        </div>
    )
}

export default BlogPostOwnerButtons