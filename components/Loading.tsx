import { getTranslations } from "next-intl/server"

async function Loading() {
    const t = await getTranslations('Common')
    
    return (
        <div>{t('loading')}</div>
    )
}

export default Loading