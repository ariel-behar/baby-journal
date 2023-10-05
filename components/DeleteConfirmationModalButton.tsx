"use client"
import IconTrash from "./Icons/IconTrash";
import { IModalContext, useModalContext } from "@/context/modalContext";

interface Props {
    entity: IModalContext['currentEntity']['entity']
    entityType: IModalContext['currentEntity']['entityType']
}

function DeleteConfirmationModalButton({
    entity,
    entityType
}: Props) {
    const { showModalHandler } = useModalContext();

    return (
        <button
            className="btn btn-sm btn-error btn-outline border-none"
            onClick={() => showModalHandler(true, 'delete', entity, entityType)}
        >
            <IconTrash sizeClassName="size-5" />
        </button>
    )
}

export default DeleteConfirmationModalButton