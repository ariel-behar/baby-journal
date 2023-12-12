import { getTranslations } from "next-intl/server"

import { IPost } from "@/models/Post"

interface Props {
    isPostOwner: boolean
    likes: IPost['likes']
}

async function LikeCounter({
    isPostOwner,
    likes
}: Props) {
    const t = await getTranslations('JournalPage')

    function likesText() {
        if (likes.length === 0) {
            if(isPostOwner) {
                return ""
            } else {
                return t('like-this-post')
                // return t('no-one-has-liked-this-post-yet')
            }
        } else if (likes.length === 1) {
            return t('like')
        } else if (likes.length > 1){
            return t('likes')
        }
    }

    return (
        <span className="text-xs sm:text-sm">
            {likes.length !== 0 && likes.length} {likesText()}
        </span>
    )
}

export default LikeCounter