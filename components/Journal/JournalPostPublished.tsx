import { getTranslations } from "next-intl/server"
import { format } from "date-fns/format"

import { IPost } from "@/models/Post"

interface Props {
    createdAt: IPost['createdAt']
}

async function JournalPostPublished({
    createdAt
}:Props) {
    const t = await getTranslations("JournalPage")

    return (
        <div className="flex flex-col gap-[10px]">
            <span className="text-gray-500 font-bold">
                {t('published')}
            </span>
            <time className="font-medium">
                {format(new Date(createdAt as string), "dd MMM yyyy")}
            </time>
        </div>
    )
}

export default JournalPostPublished