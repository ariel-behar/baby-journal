"use client"
import { useModalContext } from "@/context/modalContext"
import { useEffect, useRef } from "react"
import AddEditPostForm from "../Forms/AddEditPostForm"
import { Session } from "next-auth"
import { IPost } from "@/models/Post"
import FormStylesWrapper from "../Forms/FormComponents/FormStylesWrapper"

interface Props {
    session: Session | null
}

function PostEditModal({
    session
}: Props) {
    const { modalSettings: { showModal }, currentEntity: { entity }, showModalHandler } = useModalContext()
    const modalRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if (showModal) {
            modalRef.current?.showModal()
        }
    }, [showModal])

    return (
        <dialog ref={modalRef} className="modal" onClose={() => showModalHandler(false, null, null, null)}>
            <div className="modal-box bg-dark-soft">
                <div className="modal-action mt-0">
                    <FormStylesWrapper title="Edit Post">
                        <AddEditPostForm userId={session?.user?.id as string} formType="edit" post={entity as IPost} modalRef={modalRef} />
                    </FormStylesWrapper>
                </div>
            </div>
        </dialog>
    )
}

export default PostEditModal