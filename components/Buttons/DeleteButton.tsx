"use client"
import { useModalContext } from '@/context/modalContext'

import IconTrash from '../Icons/IconTrash'
import { useSession } from 'next-auth/react'

function DeleteButton() {
    const { deletePostHandler } = useModalContext()
    const session = useSession()
    const currentUserId = session.data?.user?.id
    
    return (
        <button className="btn btn-sm btn-error btn-min-width" onClick={() => deletePostHandler(true, currentUserId as string)}>
            Delete <IconTrash />
        </button>
    )
}

export default DeleteButton