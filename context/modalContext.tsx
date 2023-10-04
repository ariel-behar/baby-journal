"use client";
import { deletePost, deleteUser } from "@/lib/serverActions";
import { IPost } from "@/models/Post";
import { IUser } from "@/models/User";
import { createContext, useContext, useState } from "react";

export interface ICurrentEntity {
    entity: IPost | IUser | null
    entityType: 'post' | 'user' | null
}

export interface IModalContext {
    showModal: boolean,
    currentEntity: ICurrentEntity,
    showModalHandler: (showModal: boolean, entity: IModalContext['currentEntity']['entity'], entityType: IModalContext['currentEntity']['entityType'] ) => void
    deletePostHandler: (confirm: boolean) => void
}

export const ModalContext = createContext<IModalContext>({
    showModal: false,
    currentEntity: {
        entity: null,
        entityType: null
    },
    showModalHandler: () => {},
    deletePostHandler: () => {}
});

interface Props {
    children: React.ReactNode
}

export const ModalContextProvider = ({ children }:Props) => {
    const [showModal, setShowModal] = useState<IModalContext['showModal']>(false);
    const [currentEntity, setCurrentEntity] = useState<ICurrentEntity>({
        entity: null,
        entityType: null
    });

	const showModalHandler = (showModal: boolean, entity: IModalContext['currentEntity']['entity'], entityType: IModalContext['currentEntity']['entityType']  ) => {
        setCurrentEntity(prev => {
            return {
                entity: entity,
                entityType: entityType
            }
        });
        setShowModal(showModal);
	}

    const deletePostHandler = (userConfirmation: boolean) => {
        if (userConfirmation) {
            if(currentEntity.entity) {
                if(currentEntity.entityType === 'post') {
                    deletePost(currentEntity.entity._id);
                } else if (currentEntity.entityType === 'user') {
                    deleteUser(currentEntity.entity._id);
                }
            }
        }
    }

    return (
        <ModalContext.Provider value={{showModal, currentEntity, showModalHandler, deletePostHandler}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    return useContext(ModalContext);
}