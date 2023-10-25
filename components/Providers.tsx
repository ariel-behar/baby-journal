import { ModalContextProvider } from '@/context/modalContext'
import { SessionProvider } from 'next-auth/react'

interface Props {
    children: React.ReactNode
}

function Providers({
    children
}: Props) {
    return (
        <SessionProvider>
            <ModalContextProvider>
                {children}
            </ModalContextProvider>
        </SessionProvider>
    )
}

export default Providers