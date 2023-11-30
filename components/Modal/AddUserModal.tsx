"use client"
import { useModalContext } from "@/context/modalContext"
import { useEffect, useRef } from "react"
import { useTranslations } from "next-intl"

import FormStylesWrapper from "../Forms/FormComponents/FormStylesWrapper"
import ModalWrapper from "./ModalWrapper"
import AddNewUserForm from "../Forms/AddNewUserForm"

function AddUserModal() {
	const t = useTranslations()
	const { modalSettings: { showModal }} = useModalContext()
	const modalRef = useRef<HTMLDialogElement | null>(null)

	useEffect(() => {
		if (showModal) {
			modalRef.current?.showModal()
		}
	}, [showModal])

	return (
		<ModalWrapper modalRef={modalRef}>
			<FormStylesWrapper title={t('Common.add-new-user')} className="w-full">
				<AddNewUserForm modalRef={modalRef} />
			</FormStylesWrapper>
		</ModalWrapper>
	)
}

export default AddUserModal