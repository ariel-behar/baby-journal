import React from 'react'
import TableDataPost from './TableDataPost'
import { IPostPopulated } from '@/models/Post'
import { Session } from 'next-auth'

interface Props {
    post: IPostPopulated,
    session: Session | null
}

function TableDataAdminPost({
    post,
    session,
}: Props) {
    return (
        <TableDataPost post={post} session={session}>


            {/* Username */}
            <td>
                {post.userId.username}
            </td>

            {/* Email */}
            <td>
                {post.userId.email}
            </td>
            {/* Post ID */}
            <td>
                {post._id}
            </td>

        </TableDataPost>
    )
}

export default TableDataAdminPost