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

function AddEditPostModal({
    session,
}: Props) {
    const { modalSettings: { showModal, modalType }, currentEntity: { entity }, showModalHandler } = useModalContext()
    const modalRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if (showModal) {
            modalRef.current?.showModal()
        }
    }, [showModal])

    return (
        <dialog ref={modalRef} className="modal backdrop-blur-sm" onClose={() => showModalHandler(false, null, null, null)}>
            <div className="modal-box bg-dark-soft drop-shadow-glow border border-muted">
                <div className="modal-action mt-0">
                    <FormStylesWrapper title={`${modalType === 'add' ? 'Add' : 'Edit'} Post`}>
                        <AddEditPostForm
                            userId={session?.user?.id as string}
                            formType={modalType as "edit" || 'add'}
                            post={entity as IPost} modalRef={modalRef}
                        />
                    </FormStylesWrapper>
                </div>
            </div>
        </dialog>
    )
}

export default AddEditPostModal