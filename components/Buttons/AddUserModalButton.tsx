"use client"
import { useModalContext } from "@/context/modalContext"

function AddUserModalButton() {
    const { showModalHandler } = useModalContext()
    return (
        <button
            className="btn btn-sm btn-primary btn-min-width"
            onClick={() => showModalHandler(true, 'add', null, 'user')}
        >
            Add New User
        </button>
    )
}

export default AddUserModalButton