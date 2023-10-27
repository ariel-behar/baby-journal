"use client"
import { useToastContext } from '@/context/toastContext'
import { IPost, IPostPopulated } from '@/models/Post'
import { ICustomSession } from '@/types/types'

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
    const { showToast } = useToastContext();

    const formHandler = () => {
        if (stringifiedUserLikeIds.includes(user?.id as string)) {
            unlikePost(user?.id as string, post._id)
                .then(res => {
                    if (res.ok) {
                        showToast(res.message, 'error')
                    }
                })
        } else {
            likePost(user?.id as string, post._id)
                .then(res => {
                    if (res.ok) {
                        showToast(res.message, 'success')
                    }
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