import { useTranslations } from 'next-intl'
import { handleLogout } from '@/lib/serverActions'

import IconLogOut from '../Icons/IconLogOut'

interface Props {
    formClasses?: string,
    buttonClasses?: string
}

function LogOutButton({
    formClasses = 'mx-auto',
    buttonClasses
}: Props) {
    const t = useTranslations('Common')

    return (
        <form className={`${formClasses}`} action={handleLogout}>
            <button className={`${buttonClasses} btn btn-sm rounded-2xl px-2 py-1 flex justify-between text-light hover:bg-light hover:text-dark`}>
                {t('logout')} <IconLogOut />
            </button>
        </form>
    )
}

export default LogOutButton