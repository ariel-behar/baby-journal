import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Session } from 'next-auth'
import { format } from 'date-fns/format'

import { IPostPopulated } from '@/models/Post'
import { ICustomSession } from '@/types/types'

import DeleteConfirmationModalButton from '../Buttons/DeleteConfirmationModalButton'
import EditModalButton from '../Buttons/EditModalButton'

interface Props {
    post: IPostPopulated,
    session: Session | null
    children?: ReactNode
}

function TableDataPost({
    post,
    session,
    children
}: Props) {
    return (
        <>
            {/* Image */}
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-15 h-15">
                            <Link href={`/blog/${post._id}`} className="group-hover:underline">
                                <Image src={post.img || "/img/noavatar.png"} alt="" width={50} height={50} />
                            </Link>
                        </div>
                    </div>

                </div>
            </td>

            {/* Title */}
            <td>
                <div>
                    <Link href={`/blog/${post._id}`} className="flex items-center gap-5 group-hover:underline text-primary">
                        <p className="hover:underline">{post.title}</p>
                    </Link>
                </div>
            </td>

            {/* Description */}
            <td className='max-w-[200px] text-ellipsis whitespace-nowrap overflow-hidden'>
                {post.description}
            </td>
            
            {/* Created At */}
            <td>
                <span className='text-muted text-sm'>{format(new Date(post.createdAt), "dd MMM yyyy (HH:mm:ss)")}</span>
            </td>

            {/* Author */}
            <td>
                {post.user.firstName} {post.user.lastName}
            </td>

            {children}


            {/* Actions */}
            <td>
                {(session?.user?.id == post.user._id || (session as ICustomSession)?.user?.isAdmin) && (
                    <div>
                        <EditModalButton entity={post} entityType='post' />

                        <DeleteConfirmationModalButton entity={post} entityType='post' />
                    </div>
                )}
            </td>
        </>
    )
}

export default TableDataPost