import { useModalContext } from "@/context/modalContext"
import { useEffect, useRef } from "react"
import FormStylesWrapper from "../Forms/FormComponents/FormStylesWrapper"
import ModalWrapper from "./ModalWrapper"
import AddNewUserForm from "../Forms/AddNewUserForm"

function AddUserModal() {
	const { modalSettings: { showModal }} = useModalContext()
	const modalRef = useRef<HTMLDialogElement | null>(null)

	useEffect(() => {
		if (showModal) {
			modalRef.current?.showModal()
		}
	}, [showModal])

	return (
		<ModalWrapper modalRef={modalRef}>
			<FormStylesWrapper title="Add New User">
				<AddNewUserForm modalRef={modalRef} />
			</FormStylesWrapper>
		</ModalWrapper>
	)
}

export default AddUserModal