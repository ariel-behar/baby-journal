import { ModalContextProvider } from '@/context/modalContext'
import { NotificationContextProvider } from '@/context/notificationContext'
import { SessionProvider } from 'next-auth/react'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'

interface Props {
    children: React.ReactNode
    messages: AbstractIntlMessages | undefined
}

function Providers({
    children,
    messages
}: Props) {
    return (
        <NextIntlClientProvider messages={messages as AbstractIntlMessages}>
            <SessionProvider>
                <NotificationContextProvider>
                    <ModalContextProvider>
                        {children}
                    </ModalContextProvider>
                </NotificationContextProvider>
            </SessionProvider>
        </NextIntlClientProvider>
    )
}

export default Providers