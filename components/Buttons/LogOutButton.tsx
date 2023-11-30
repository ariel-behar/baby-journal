import { useTranslations } from 'next-intl'
import { handleLogout } from '@/lib/serverActions'

import IconLogOut from '../Icons/IconLogOut'

function LogOutButton() {
    const t = useTranslations('Common')

    return (
        <form className="mx-auto" action={handleLogout}>
            <button className="btn btn-sm rounded-2xl px-2 py-1 flex justify-between text-light hover:bg-light hover:text-dark">
                {t('logout')} <IconLogOut />
            </button>
        </form>
    )
}

export default LogOutButton