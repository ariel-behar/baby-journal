"use client";
import { createContext, useContext, useState } from 'react';

export type TNotificationType = 'success' | 'error' | 'info' | 'warning';

interface INotification {
    message: string,
    type: TNotificationType,
    options?: any
}

interface INotificationContext {
    notification: INotification;
    displayNotification: (message: string, type: TNotificationType, options?: any) => void;
}

const initialNotificationState: INotification = {
    message: '',
    type: 'info',
    options: {}
}

export const NotificationContext = createContext<INotificationContext>({
    notification: initialNotificationState,
    displayNotification: () => { }
});


interface Props {
    children: React.ReactNode;
}

export const NotificationContextProvider = ({
    children
}: Props) => {
    const [notification, setNotification] = useState<INotification>(initialNotificationState);

    function displayNotification(message: string, type: TNotificationType, options?: any) {
        setNotification(prevState => {
            return {
                ...prevState,
                message, 
                type, 
                options 
            }
        });
    }

    return (
        <NotificationContext.Provider value={{ notification, displayNotification }}>
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotificationContext = () => {
    return useContext(NotificationContext);
}