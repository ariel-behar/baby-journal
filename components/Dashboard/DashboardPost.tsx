import Image from 'next/image'
import Link from 'next/link'
import { Session } from 'next-auth'
import { format } from 'date-fns/format'

import { IPost } from '@/models/Post'
import { ICustomSession } from '@/types/types'

import DeleteConfirmationModalButton from '../DeleteConfirmationModalButton'
import EditModalButton from '../EditModalButton'

interface Props {
    post: IPost
    session: Session | null
}

function DashboardPost({
    post,
    session
}: Props) {

    return (
        <div className="my-5 flex items-center justify-between gap-5">
            <div className="flex items-center gap-5 group h-full">
                <Link href={`/blog/${post._id}`} className="group-hover:underline">
                    <Image src={post.img || "/img/noavatar.png"} alt="" width={50} height={50} />
                </Link>

                <div className='flex flex-col h-full flex-grow'>
                    <Link href={`/blog/${post._id}`} className="flex items-center gap-5 group-hover:underline">
                        <p className="hover:underline">{post.title}</p>
                    </Link>

                    <span className='text-muted text-sm'>{format(new Date(post.createdAt), "dd MMM yyyy")}</span>
                </div>
            </div>

            {(session?.user?.id == post.userId || (session as ICustomSession)?.user?.isAdmin) && (
                <div>
                    <EditModalButton entity={post} entityType='post' />

                    <DeleteConfirmationModalButton entity={post} entityType='post' />
                </div>
            )}
        </div>
    )
}

export default DashboardPost