"use client"
import { IModalContext, useModalContext } from '@/context/modalContext'

import IconPencil from './Icons/IconPencil'

interface Props {
    entity: IModalContext['currentEntity']['entity']
    entityType: IModalContext['currentEntity']['entityType']
}


function EditModalButton({
    entity,
    entityType
}: Props) {
    const { showModalHandler } = useModalContext()
    return (
        <button
            className="btn btn-sm btn-primary btn-outline border-none"
            onClick={() => showModalHandler(true, 'edit', entity, entityType)}
        >
            <IconPencil sizeClassName="size-5" />
        </button>
    )
}

export default EditModalButton