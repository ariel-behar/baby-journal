import { IPost } from "@/models/Post"
import DeleteConfirmationModalButton from "../DeleteConfirmationModalButton"
import IconPencil from "../Icons/IconPencil"

interface Props {
    post: IPost
}

function BlogPostOwnerButtons({
    post
}: Props) {
    return (
        <div className="flex">
            <button className="btn btn-sm btn-primary btn-outline border-none">
                <IconPencil sizeClassName="size-5"/>
            </button>

            <DeleteConfirmationModalButton entity={post} entityType='post' />
        </div>
    )
}

export default BlogPostOwnerButtons