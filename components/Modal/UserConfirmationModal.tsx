"use client"
import { useEffect, useRef } from "react"
import { useModalContext } from "@/context/modalContext"

import { IPost } from "@/models/Post"
import { IUser } from "@/models/User"
import DeleteButton from "../Buttons/DeleteButton"
import ModalWrapper from "./ModalWrapper"

function UserConfirmationModal() {
    const { modalSettings: { showModal }, currentEntity } = useModalContext()
    const modalRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if (showModal) {
            modalRef.current?.showModal()
        }
    }, [showModal])

    return (
        <ModalWrapper modalRef={modalRef}>
            <p className="py-4">
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

            <div className="modal-action mt-0">
                <form method="dialog" className="flex justify-center w-full gap-1 sm:gap-10">
                    {/* if there is a button in form, it will close the modal */}
                    <DeleteButton />

                    <button className="btn btn-sm btn-primary btn-min-width">Cancel</button>
                </form>
            </div>
        </ModalWrapper>
    )
}

export default UserConfirmationModal