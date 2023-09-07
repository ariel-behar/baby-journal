"use client"
import { deletePost } from "@/lib/serverActions";
import { IPost } from "@/models/Post";
import UserConfirmationModal from "../Modal/UserConfirmationModal";
import IconTrash from "../Icons/IconTrash";

interface Props {
    post: IPost
}

function BlogPostDeleteButtonAndModal({
    post
}: Props) {
    const deletePostHandler = (userConfirmation: boolean) => {
        if (userConfirmation) {
            deletePost(post._id);
        }
    }

    return (
        <>
            <UserConfirmationModal post={post} deletePostHandler={deletePostHandler} />

            <button
                className="btn btn-sm btn-error btn-outline border-none"
                onClick={() => (document.getElementById('confirm-modal') as HTMLDialogElement).showModal()}>
                <IconTrash />
            </button>
        </>
    )
}

export default BlogPostDeleteButtonAndModal