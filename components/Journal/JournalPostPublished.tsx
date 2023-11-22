import { format } from "date-fns/format"

import { IPost } from "@/models/Post"

interface Props {
    createdAt: IPost['createdAt']
}

function JournalPostPublished({
    createdAt
}:Props) {
    return (
        <div className="flex flex-col gap-[10px]">
            <span className="text-gray-500 font-bold">
                Published
            </span>
            <time className="font-medium">
                {format(new Date(createdAt as string), "dd MMM yyyy")}
            </time>
        </div>
    )
}

export default JournalPostPublished