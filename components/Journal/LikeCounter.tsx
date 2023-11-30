import { getTranslations } from "next-intl/server"

import { IPost } from "@/models/Post"

interface Props {
    likes: IPost['likes']
}

async function LikeCounter({
    likes
}: Props) {
    const t = await getTranslations('JournalPage')

    function likesText() {
        if (likes.length === 0) {
            return ''
            // return t('no-one-has-liked-this-post-yet')
        } else if (likes.length === 1) {
            return t('person-has-liked-this-post')
        } else if (likes.length > 1){
            return t('people-have-liked-this-post')
        }
    }

    return (
        <span className="text-sm">
            {likes.length !== 0 && likes.length} {likesText()}
        </span>
    )
}

export default LikeCounter