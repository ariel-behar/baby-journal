"use client"
import { useTranslations } from "next-intl"

import { useModalContext } from "@/context/modalContext"

import IconPlus from "../Icons/IconPlus"

function AddPostModalButton() {
    const { showModalHandler } = useModalContext()
    const t = useTranslations("Common")

    return (
        <button
            className="btn btn-sm btn-primary btn-min-width"
            onClick={() => showModalHandler(true, 'add', null, 'post')}
        >
            {t('add-post-modal-button')} <IconPlus />
        </button>
    )
}

export default AddPostModalButton