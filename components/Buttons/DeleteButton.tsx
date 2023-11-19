"use client"
import { useSession } from 'next-auth/react'

import { useNotificationContext } from '@/context/notificationContext'
import { useModalContext } from '@/context/modalContext'

import IconTrash from '../Icons/IconTrash'
import { usePathname, useRouter } from '@/lib/i18nNavigation'

function DeleteButton() {
    const router = useRouter();
    const { deletePostHandler, currentEntity } = useModalContext()
    const { displayNotification } = useNotificationContext();
    const session = useSession()
    const currentUserId = session.data?.user?.id
    const pathName = usePathname()
    const redirectToBlog = pathName === `/journal/${currentEntity?.entity?._id}`

    const onDeleteButtonClick = () => {
        const deleteResponse = deletePostHandler(true, currentUserId as string)

        if (deleteResponse) {
            deleteResponse.then(res => {
                if (res.ok) {
                    if (redirectToBlog) {
                        router.push('/journal')
                    }

                    displayNotification(res.message, 'info')
                }
            }).catch(err => {
                displayNotification(err.message, 'error')
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