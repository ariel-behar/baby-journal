"use client"
import { useModalContext } from "@/context/modalContext"
import { useEffect, useRef } from "react"
import AddEditPostForm from "../Forms/AddEditPostForm"
import { Session } from "next-auth"
import { IPost } from "@/models/Post"

interface Props {
    session: Session | null
}

function PostEditModal({
    session
}: Props) {
    const { modalSettings: { showModal }, currentEntity: {entity}, showModalHandler } = useModalContext()
    const modalRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if (showModal) {
            modalRef.current?.showModal()
        }
    }, [showModal])

    return (
        <dialog ref={modalRef} className="modal" onClose={() => showModalHandler(false, null, null, null)}>
            <div className="modal-box bg-secondary text-secondary-content">

                {/* <p className="py-4">
                    Are you sure you want to delete the {currentEntity.entityType === 'post' ? 'post ' : 'user '}
                    <span className="font-bold">
                        "
                        {
                            currentEntity.entityType === 'post'
                                ? (currentEntity.entity as IPost)?.title 
                                : (currentEntity.entity as IUser)?.username}
                        "
                    </span>
                    &nbsp;?
                </p>

                <div className="modal-action">
                    <form method="dialog" className="flex justify-center w-full gap-1 sm:gap-10"> */}
                {/* if there is a button in form, it will close the modal */}
                {/* <button className="btn btn-sm btn-error btn-outline" onClick={() => deletePostHandler(true)}>
                            Delete Post <IconTrash sizeClassName="size-5" />
                        </button>

                        <button className="btn btn-sm btn-primary sm:px-7" onClick={() => deletePostHandler(false)}>Cancel</button>
                    </form>
                </div> */}

                <AddEditPostForm userId={session?.user?.id as string} formType="edit" post={entity as IPost}  />
            </div>
        </dialog>
    )
}

export default PostEditModal