import { ModalContextProvider } from '@/context/modalContext'
import { ToastContextProvider } from '@/context/toastContext'
import { SessionProvider } from 'next-auth/react'

interface Props {
    children: React.ReactNode
}

function Providers({
    children
}: Props) {
    return (
        <SessionProvider>
            <ToastContextProvider >
                <ModalContextProvider>
                    {children}
                </ModalContextProvider>
            </ToastContextProvider>
        </SessionProvider>
    )
}

export default Providers