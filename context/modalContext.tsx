"use client";
import { deletePost, deleteUser } from "@/lib/serverActions";
import { IPost, IPostPopulated } from "@/models/Post";
import { IUser } from "@/models/User";
import { createContext, useContext, useState } from "react";

export interface IModalSettings {
    showModal: boolean
    modalType: 'delete' | 'add' | 'edit' | null
}

export interface ICurrentEntity {
    entity: IPost | IPostPopulated | IUser | null
    entityType: 'post' | 'user' | null
}

export interface IModalContext {
    modalSettings: IModalSettings,
    currentEntity: ICurrentEntity,
    showModalHandler: (showModal: IModalContext['modalSettings']['showModal'], modalType: IModalContext['modalSettings']['modalType'] , entity: IModalContext['currentEntity']['entity'], entityType: IModalContext['currentEntity']['entityType']) => void
    deletePostHandler: (userConfirmation: boolean, currentUserId: IUser['_id']) => Promise<any> | void
}

export const ModalContext = createContext<IModalContext>({
    modalSettings: {
        showModal: false,
        modalType: null,
    },
    currentEntity: {
        entity: null,
        entityType: null
    },
    showModalHandler: () => { },
    deletePostHandler: () => { }
});

interface Props {
    children: React.ReactNode
}

export const ModalContextProvider = ({ children }: Props) => {
    const [modalSettings, setModalSettings] = useState<IModalContext['modalSettings']>({
        showModal: false,
        modalType: null
    });
    const [currentEntity, setCurrentEntity] = useState<ICurrentEntity>({
        entity: null,
        entityType: null
    });

    const showModalHandler = (
        showModal: boolean,
        modalType: IModalContext['modalSettings']['modalType'],
        entity: IModalContext['currentEntity']['entity'],
        entityType: IModalContext['currentEntity']['entityType']
    ) => {
        setCurrentEntity(prev => {
            return {
                entity: entity,
                entityType: entityType
            }
        });
        setModalSettings(prev => {
            return {
                showModal: showModal,
                modalType: modalType
            }
        });
    }

    const deletePostHandler = (userConfirmation: boolean, currentUserId: IUser['_id']) => {
        if (userConfirmation) {
            if (currentEntity.entity) {
                if (currentEntity.entityType === 'post') {
                    return deletePost(currentEntity.entity._id);
                } else if (currentEntity.entityType === 'user') {
                    return deleteUser(currentEntity.entity._id, currentUserId);
                }
            }
        }
    }

    return (
        <ModalContext.Provider value={{ modalSettings, currentEntity, showModalHandler, deletePostHandler }}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    return useContext(ModalContext);
}