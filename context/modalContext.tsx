"use client";
import { deletePost } from "@/lib/serverActions";
import { IPost } from "@/models/Post";
import { createContext, useContext, useState } from "react";

interface IModalContext {
    showModal: boolean,
    post: IPost | null,
    showModalHandler: (showModal: boolean, post: IPost | null ) => void
    deletePostHandler: (confirm: boolean) => void
}

export const ModalContext = createContext<IModalContext>({
    showModal: false,
    post: null,
    showModalHandler: () => {},
    deletePostHandler: () => {}
});

interface Props {
    children: React.ReactNode
}

export const ModalContextProvider = ({ children }:Props) => {
    const [showModal, setShowModal] = useState<IModalContext['showModal']>(false);
    const [post, setPost] = useState<IModalContext['post']>(null);

	const showModalHandler = (showModal: boolean, post: IPost | null ) => {
        setPost(post);
        setShowModal(showModal);
	}

    const deletePostHandler = (userConfirmation: boolean) => {
        if (userConfirmation) {
            if(post) {
                deletePost(post._id);
            }
        }
    }

    return (
        <ModalContext.Provider value={{showModal, post, showModalHandler, deletePostHandler}}>
            {children}
        </ModalContext.Provider>
    )
}

export const useModalContext = () => {
    return useContext(ModalContext);
}