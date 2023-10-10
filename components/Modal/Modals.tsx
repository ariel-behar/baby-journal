"use client"
import { Session } from "next-auth"
import { useModalContext } from "@/context/modalContext"

import UserConfirmationModal from "./UserConfirmationModal"
import AddEditPostModal from "./AddEditPostModal"

interface Props {
    session: Session | null
}

function Modals({
    session
}: Props) {
    const { modalSettings: { showModal, modalType } } = useModalContext()
    

    return (
        <>
            {
                showModal && (
                    <>
                        {
                            modalType === 'delete' && (
                                <UserConfirmationModal />
                            )
                        }

                        {
                            (modalType === 'edit' || modalType === 'add') && (
                                <AddEditPostModal session={session} />
                            )
                        }
                    </>
                )
            }
        </>
    )
}

export default Modals