"use client"
import { useSession } from 'next-auth/react'

import { useNotificationContext } from '@/context/notificationContext'
import { useModalContext } from '@/context/modalContext'

import IconTrash from '../Icons/IconTrash'
import { usePathname, useRouter } from 'next/navigation'

function DeleteButton() {
    const router = useRouter();
    const { deletePostHandler, currentEntity } = useModalContext()
    const { displayNotification } = useNotificationContext();
    const session = useSession()
    const currentUserId = session.data?.user?.id
    const pathName = usePathname()
    const redirectToBlog = pathName === `/blog/${currentEntity?.entity?._id}`

    const onDeleteButtonClick = () => {
        const deleteResponse = deletePostHandler(true, currentUserId as string)

        if (deleteResponse) {
            deleteResponse.then(res => {
                if (res.ok) {
                    if (redirectToBlog) {
                        router.push('/blog')
                    }
                    
                    displayNotification(res.message, 'info')
                }
            })
        }
    }

    return (
        <button className="btn btn-sm btn-error btn-min-width" onClick={onDeleteButtonClick}>
            Delete <IconTrash />
        </button>
    )
}

export default DeleteButton