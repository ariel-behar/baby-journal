"use client"
import { useEffect, useRef } from "react"
import { useModalContext } from "@/context/modalContext"

import { IPost } from "@/models/Post"
import { IUser } from "@/models/User"
import DeleteButton from "../DeleteButton"

function UserConfirmationModal() {
    const { modalSettings: {showModal}, currentEntity, showModalHandler } = useModalContext()
    const modalRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if (showModal) {
            modalRef.current?.showModal()
        }
    }, [showModal])

    return (
        <dialog ref={modalRef} className="modal backdrop-blur-sm" onClose={() => showModalHandler(false, null, null, null)}>
            <div className="modal-box drop-shadow-glow border border-muted">

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

                <div className="modal-action">
                    <form method="dialog" className="flex justify-center w-full gap-1 sm:gap-10">
                        {/* if there is a button in form, it will close the modal */}
                        <DeleteButton />

                        <button className="btn btn-sm btn-primary btn-min-width">Cancel</button>
                    </form>
                </div>

            </div>
        </dialog>
    )
}

export default UserConfirmationModal