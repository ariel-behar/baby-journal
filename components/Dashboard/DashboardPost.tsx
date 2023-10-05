import Image from 'next/image'
import Link from 'next/link'
import { ICustomSession } from '../Header/Navbar/UserNavLinks'
import DeleteConfirmationModalButton from '../DeleteConfirmationModalButton'
import { IPost } from '@/models/Post'
import IconPencil from '../Icons/IconPencil'
import { Session } from 'next-auth'

interface Props {
    post: IPost
    session: Session | null
}

function DashboardPost({
    post,
    session
}:Props) {
    return (
        <div className="my-5 flex items-center justify-between gap-5">
            <Link href={`/blog/${post._id}`} className="flex items-center gap-5 hover:underline">
                <Image src={post.img || "/img/noavatar.png"} alt="" width={50} height={50} />
                <span className="hover:underline">{post.title}</span>
            </Link>

            {(session?.user?.id == post.userId || (session as ICustomSession).user?.isAdmin) && (
                <div>
                    <button className="btn btn-sm btn-primary btn-outline border-none">
                        <IconPencil sizeClassName="size-5" />
                    </button>

                    <DeleteConfirmationModalButton entity={post} entityType='post' />
                </div>
            )}
        </div>
    )
}

export default DashboardPost