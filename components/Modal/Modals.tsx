"use client"
import { Session } from "next-auth"
import { useModalContext } from "@/context/modalContext"

import UserConfirmationModal from "./UserConfirmationModal"
import AddEditPostModal from "./AddEditPostModal"
import AddUserModal from "./AddUserModal"

interface Props {
    session: Session | null
}

function Modals({
    session
}: Props) {
    const { modalSettings: { showModal, modalType }, currentEntity: { entityType } } = useModalContext()

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
                            (modalType === 'edit' || modalType === 'add' && entityType === 'post') && (
                                <AddEditPostModal session={session} />
                            )
                        }

                        {
                            ( modalType === 'add' && entityType === 'user') && (
                                <AddUserModal />
                            )
                        }
                    </>
                )
            }
        </>
    )
}

export default Modals