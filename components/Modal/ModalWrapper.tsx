"use client"
import { useModalContext } from "@/context/modalContext"

interface Props {
    modalRef: React.RefObject<HTMLDialogElement>
    children: React.ReactNode
}

function ModalWrapper({
    modalRef,
    children
}: Props) {
    const { showModalHandler } = useModalContext()
    return (
        <dialog ref={modalRef} className="modal h-auto backdrop-blur-sm " onClose={() => showModalHandler(false, null, null, null)}>
            <div className="modal-box bg-dark-soft border border-muted p-4 sm:p-6">

                {children}
                
            </div>
        </dialog>
    )
}

export default ModalWrapper