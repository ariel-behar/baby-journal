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

    return (
        <>
            <form action={stringifiedUserLikeIds.includes(user?.id as string) ? unlikePost : likePost}>
                <input type="hidden" name="userId" value={user?.id} />
                <input type="hidden" name="postId" value={post._id} />
                <button className='transform hover:scale-110 duration-200'>
                    {
                        stringifiedUserLikeIds.includes(user?.id as string)
                            ? <IconHeartSolid fillColor='#D32F2F' sizeClassName='size-6' />
                            : <IconHeartOutline sizeClassName='size-6' />
                    }
                </button>
            </form>
        </>
    )
}

export default LikeButton