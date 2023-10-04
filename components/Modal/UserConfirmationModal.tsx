"use client"
import { useEffect, useRef } from "react"
import { useModalContext } from "@/context/modalContext"

import IconTrash from "../Icons/IconTrash"

function UserConfirmationModal() {
    const { showModal, post, showModalHandler, deletePostHandler } = useModalContext()
    const modalRef = useRef<HTMLDialogElement | null>(null)

    useEffect(() => {
        if(showModal) {
            modalRef.current?.showModal()
        }
    },[showModal])

    return (
        <dialog ref={modalRef} className="modal" onClose={() => showModalHandler(false, null)}>
            <div className="modal-box bg-secondary text-secondary-content">

                <p className="py-4">
                    Are you sure you want to delete post&nbsp;
                    <span className="font-bold">"{post?.title}"</span>
                    &nbsp;?
                </p>

                <div className="modal-action">
                    <form method="dialog" className="flex justify-center w-full gap-1 sm:gap-10">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-error btn-outline" onClick={() => deletePostHandler(true)}>
                            Delete Post <IconTrash sizeClassName="size-5" />
                        </button>

                        <button className="btn btn-sm btn-primary sm:px-7" onClick={() => deletePostHandler(false)}>Cancel</button>
                    </form>
                </div>

            </div>
        </dialog>
    )
}

export default UserConfirmationModal