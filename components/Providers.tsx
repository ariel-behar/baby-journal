import { ModalContextProvider } from '@/context/modalContext'
import { NotificationContextProvider } from '@/context/notificationContext'
import { SessionProvider } from 'next-auth/react'

interface Props {
    children: React.ReactNode
}

function Providers({
    children
}: Props) {
    return (
        <SessionProvider>
            <NotificationContextProvider>
                <ModalContextProvider>
                    {children}
                </ModalContextProvider>
            </NotificationContextProvider>
        </SessionProvider>
    )
}

export default Providers