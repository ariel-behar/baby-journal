import { likePost, unlikePost } from '@/lib/serverActions'
import IconHeartOutline from '../Icons/IconHeartOutline'
import { IPost } from '@/models/Post'
import { ICustomSession } from '@/types/types'
import IconHeartSolid from '../Icons/IconHeartSolid'

interface Props {
    user: ICustomSession['user']
    post: IPost
}

function LikeButton({
    user,
    post
}: Props) {

    return (
        <>
            <form action={post.likes.includes(user?.id as string) ? unlikePost : likePost}>
                <input type="hidden" name="userId" value={user?.id} />
                <input type="hidden" name="postId" value={post._id} />
                <button className='transform hover:scale-110 duration-200'>
                    {
                        post.likes.includes(user?.id as string)
                            ? <IconHeartSolid fillColor='#D32F2F' sizeClassName='size-6' />
                            : <IconHeartOutline sizeClassName='size-6' />
                    }
                </button>
            </form>
        </>
    )
}

export default LikeButton