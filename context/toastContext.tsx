"use client"
import { useContext, createContext, useState } from "react";

type TToastColor = 'bg-info' | 'bg-error' | 'bg-success';

interface IToastContext {
    toastMessage: string;
    toastColor: TToastColor | '';
    showToast: (message: string, type: 'info' | 'error' | 'success') => void;
}

const ToastContext = createContext<IToastContext>({
    toastMessage: '',
    toastColor: 'bg-info',
    showToast: () => {}
});

interface Props {
    children: React.ReactNode;
}

export const ToastContextProvider = ({
    children
}:Props ) => {
    const [ toastMessage, setToastMessage ] = useState<string>('');
    const [ toastColor, setToastColor ] = useState<TToastColor | ''>('');

    const showToast = (message: string, type: 'info' | 'error' | 'success') => {

        setToastMessage(message);

        setToastColor(`bg-${type}`);

        setTimeout(() => {
            setToastMessage('');
            setToastColor('');
        }, 5000);
    }

    return (
        <ToastContext.Provider value={{ toastMessage, toastColor, showToast }}>
            {children}
        </ToastContext.Provider>
    )
}

export const useToastContext = () => {
    return useContext(ToastContext);
}