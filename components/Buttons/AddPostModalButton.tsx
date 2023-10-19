"use client"
import { useModalContext } from "@/context/modalContext"

import IconPlus from "../Icons/IconPlus"

function AddPostModalButton() {
    const { showModalHandler } = useModalContext()
    return (
        <button
            className="btn btn-sm btn-primary btn-min-width"
            onClick={() => showModalHandler(true, 'add', null, 'post')}
        >
            Add New Post <IconPlus />
        </button>
    )
}

export default AddPostModalButton