"use client"
import { useModalContext } from '@/context/modalContext'

import IconTrash from '../Icons/IconTrash'

function DeleteButton() {
    const { deletePostHandler } = useModalContext()
    
    return (
        <button className="btn btn-sm btn-error btn-min-width" onClick={() => deletePostHandler(true)}>
            Delete <IconTrash />
        </button>
    )
}

export default DeleteButton