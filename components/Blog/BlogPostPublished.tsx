import { format } from "date-fns/format"

import { IPost } from "@/models/Post"

interface Props {
    createdAt: IPost['createdAt']
}

function BlogPostPublished({
    createdAt
}:Props) {
    return (
        <div className="flex flex-col gap-[10px]">
            <span className="text-gray-500 font-bold">
                Published
            </span>
            <span className="font-medium">
                {format(new Date(createdAt as string), "dd MMM yyyy")}
            </span>
        </div>
    )
}

export default BlogPostPublished