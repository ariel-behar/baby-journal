"use client"
import { useModalContext } from "@/context/modalContext"

import IconPlus from "../Icons/IconPlus"

function AddUserModalButton() {
    const { showModalHandler } = useModalContext()
    return (
        <button
            className="btn btn-sm btn-primary btn-min-width"
            onClick={() => showModalHandler(true, 'add', null, 'user')}
        >
            Add New User <IconPlus sizeClassName="size-5" />
        </button>
    )
}

export default AddUserModalButton