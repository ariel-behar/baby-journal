import { getTranslations } from "next-intl/server"

async function FooterAllRightsReserved() {
    const t = await getTranslations("Footer")

    return (
        <span className="text-center text-muted order-3">
            <time>{new Date().getFullYear()}</time> &copy; {t('all-rights-reserved')}
        </span>
    )
}

export default FooterAllRightsReserved