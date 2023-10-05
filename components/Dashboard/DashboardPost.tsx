import Image from 'next/image'
import Link from 'next/link'
import { ICustomSession } from '../Header/Navbar/UserNavLinks'
import DeleteConfirmationModalButton from '../DeleteConfirmationModalButton'
import { IPost } from '@/models/Post'
import { Session } from 'next-auth'
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
            <Link href={`/blog/${post._id}`} className="flex items-center gap-5 hover:underline">
                <Image src={post.img || "/img/noavatar.png"} alt="" width={50} height={50} />
                <span className="hover:underline">{post.title}</span>
            </Link>

            {(session?.user?.id == post.userId || (session as ICustomSession).user?.isAdmin) && (
                <div>

                    <EditModalButton entity={post} entityType='post' />

                    <DeleteConfirmationModalButton entity={post} entityType='post' />
                </div>
            )}
        </div>
    )
}

export default DashboardPost