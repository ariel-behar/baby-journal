"use client"
import { useSession } from 'next-auth/react'

import { useNotificationContext } from '@/context/notificationContext'
import { useModalContext } from '@/context/modalContext'

import IconTrash from '../Icons/IconTrash'

function DeleteButton() {
    const { deletePostHandler } = useModalContext()
    const { displayNotification } = useNotificationContext();
    const session = useSession()
    const currentUserId = session.data?.user?.id

    const onDeleteButtonClick = () => {
        try {
            const deleteResponse = deletePostHandler(true, currentUserId as string)

            if (deleteResponse) {
                deleteResponse.then(res => {
                    if (res.ok) {
                        displayNotification(res.message, 'info')
                    }
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button className="btn btn-sm btn-error btn-min-width" onClick={onDeleteButtonClick}>
            Delete <IconTrash />
        </button>
    )
}

export default DeleteButton