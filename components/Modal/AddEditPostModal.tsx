"use client"
import { useModalContext } from "@/context/modalContext"
import { useEffect, useRef } from "react"
import AddEditPostForm from "../Forms/AddEditPostForm"
import { Session } from "next-auth"
import { IPost } from "@/models/Post"
import FormStylesWrapper from "../Forms/FormComponents/FormStylesWrapper"
import ModalWrapper from "./ModalWrapper"

interface Props {
    session: Session | null
}

function AddEditPostModal({
    session,
}: Props) {
    const { modalSettings: { showModal, modalType }, currentEntity: { entity } } = useModalContext()
    const modalRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if (showModal) {
            modalRef.current?.showModal()
        }
    }, [showModal])

    return (
        <ModalWrapper modalRef={modalRef}>
            <div className="modal-action mt-0">
                <FormStylesWrapper title={`${modalType === 'add' ? 'Add' : 'Edit'} Post`}>
                    <AddEditPostForm
                        userId={session?.user?.id as string}
                        formType={modalType as "edit" || 'add'}
                        post={entity as IPost}
                        modalRef={modalRef}
                    />
                </FormStylesWrapper>
            </div>
        </ModalWrapper>
    )
}

export default AddEditPostModal