"use client"
import { useTranslations } from "next-intl"

import { useModalContext } from "@/context/modalContext"

import IconPlus from "../Icons/IconPlus"

function AddUserModalButton() {
    const { showModalHandler } = useModalContext()
    const t = useTranslations("Common")
    
    return (
        <button
            className="btn btn-sm btn-primary btn-min-width"
            onClick={() => showModalHandler(true, 'add', null, 'user')}
        >
            {t('add-user-modal-button')} <IconPlus />
        </button>
    )
}

export default AddUserModalButton