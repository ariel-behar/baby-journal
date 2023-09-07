"use client"
import { deletePost } from "@/lib/serverActions"
import { IPost } from "@/models/Post"
import UserConfirmationModal from "../Modal/UserConfirmationModal"

interface Props {
    post: IPost
}

function BlogPostOwnerButtons({
    post
}: Props) {

    const deletePostHandler = (userConfirmation: boolean) => {
        if (userConfirmation) {
            deletePost(post._id);
        }
    }

    return (
        <div className="flex gap-3">
            <UserConfirmationModal post={post} deletePostHandler={deletePostHandler} />

            <button className="btn btn-sm btn-primary">Edit</button>

            {/* <form action={deletePostHandler}> */}
            <button className="btn btn-sm btn-error btn-outline" onClick={() => (document.getElementById('confirm-modal') as HTMLDialogElement).showModal()}>Delete</button>
            {/* </form> */}
        </div>
    )
}

export default BlogPostOwnerButtons