import { IPost } from "@/models/Post"
import DeleteConfirmationModalButton from "../DeleteConfirmationModalButton"
import EditModalButton from "../EditModalButton"

interface Props {
    post: IPost
}

function BlogPostOwnerButtons({
    post
}: Props) {
    return (
        <div className="flex">
            <EditModalButton entity={post} entityType='post' />

            <DeleteConfirmationModalButton entity={post} entityType='post' />
        </div>
    )
}

export default BlogPostOwnerButtons