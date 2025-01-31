"use client"
import { useTranslations } from 'next-intl';
import { useRouter } from '@/lib/i18nNavigation';
import { useNotificationContext } from '@/context/notificationContext';

import IconHeartOutline from '../Icons/IconHeartOutline';

function NotLoggedInLikeButton() {
    const t = useTranslations("JournalPage")
    const { displayNotification } = useNotificationContext();
    const router = useRouter();

    const onHeartIconClickHandler = () => {
        router.push('/login')
        displayNotification(t('please-log-in-to-like-this-post'), 'info')
    }
    
    return (
        <span className='cursor-pointer' onClick={onHeartIconClickHandler}>
            <IconHeartOutline />
        </span>
    )
}

export default NotLoggedInLikeButton