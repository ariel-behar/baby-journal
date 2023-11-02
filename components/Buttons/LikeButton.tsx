"use client"
import { IPost, IPostPopulated } from '@/models/Post'
import { ICustomSession } from '@/types/types'

import { useNotificationContext } from '@/context/notificationContext'

import { likePost, unlikePost } from '@/lib/serverActions'

import IconHeartOutline from '../Icons/IconHeartOutline'
import IconHeartSolid from '../Icons/IconHeartSolid'

interface Props {
    user: ICustomSession['user']
    post: IPost | IPostPopulated
}

function LikeButton({
    user,
    post
}: Props) {
    const stringifiedUserLikeIds = post.likes.map(like => like.toString());
    const { displayNotification } = useNotificationContext()

    const formHandler = () => {
        if (stringifiedUserLikeIds.includes(user?.id as string)) {
            unlikePost(user?.id as string, post._id)
                .then(res => {
                    if (res.ok) {
                        displayNotification(res.message, 'error', {
                            icon: <IconHeartOutline sizeClassName='size-6' />
                        })
                    }
                })
                .catch(error => {
                    displayNotification(error.message, 'error')
                })
        } else {
            likePost(user?.id as string, post._id)
                .then(res => {
                    if (res.ok) {
                        displayNotification(res.message, 'success', {
                            icon: <IconHeartSolid fillColor='#D32F2F' sizeClassName='size-6' />
                        })
                    }
                })
                .catch(error => {
                    displayNotification(error.message, 'error')
                })
        }
    }

    return (
        <button className='transform hover:scale-110 duration-200' onClick={formHandler}>
            {
                stringifiedUserLikeIds.includes(user?.id as string)
                    ? <IconHeartSolid fillColor='#D32F2F' sizeClassName='size-6' />
                    : <IconHeartOutline sizeClassName='size-6' />
            }
        </button>
    )
}

export default LikeButton