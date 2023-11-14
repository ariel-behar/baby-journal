import { IPost } from "@/models/Post"

interface Props {
    likes: IPost['likes']
}

function LikeCounter({
    likes
}: Props) {
    function likesText() {
        if (likes.length === 0) {
            return 'No one has liked this post yet!'
        } else if (likes.length === 1) {
            return 'person has liked this post!'
        } else if (likes.length > 1){
            return 'people have liked this post!'
        }
    }

    return (
        <span className="text-sm">
            {likes.length !== 0 && likes.length} {likesText()}
        </span>
    )
}

export default LikeCounter