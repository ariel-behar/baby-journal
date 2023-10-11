"use client"
import { useModalContext } from "@/context/modalContext"

function AddPostModalButton() {
    const { showModalHandler } = useModalContext()
    return (
        <button
            className="btn btn-sm btn-primary btn-min-width"
            onClick={() => showModalHandler(true, 'add', null, 'post')}
        >
            Add Post
        </button>
    )
}

export default AddPostModalButton