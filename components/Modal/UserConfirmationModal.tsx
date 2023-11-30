"use client"
import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl"
import { useModalContext } from "@/context/modalContext"

import { IPost } from "@/models/Post"
import { IUser } from "@/models/User"

import DeleteButton from "../Buttons/DeleteButton"
import ModalWrapper from "./ModalWrapper"
import CancelButton from "../Buttons/CancelButton"

function UserConfirmationModal() {
    const t = useTranslations()
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
                {t('Common.are-you-sure-you-want-to-delete-the')} {currentEntity.entityType === 'post' ? `${t('Common.post')} ` : `${t('Common.user')} `}
                <span className="font-bold">
                    "
                    {
                        currentEntity.entityType === 'post'
                            ? (currentEntity.entity as IPost)?.title
                            : `${(currentEntity.entity as IUser)?.firstName} ${(currentEntity.entity as IUser)?.lastName}`
                            }
                    "
                </span>
                &nbsp;?
            </p>

            <div className="modal-action mt-0">
                <form method="dialog" className="flex justify-around w-full gap-1 sm:gap-10">
                    {/* if there is a button in form, it will close the modal */}
                    <DeleteButton />

                    <CancelButton className="btn-primary" onClick={() => modalRef.current?.close()}/>
                </form>
            </div>
        </ModalWrapper>
    )
}

export default UserConfirmationModal