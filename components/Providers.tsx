import { ModalContextProvider } from '@/context/modalContext'

interface Props {
    children: React.ReactNode
}

function Providers({
    children
}: Props) {
    return (
        <ModalContextProvider>
            {children}
        </ModalContextProvider>
    )
}

export default Providers