"use client"
import { ChangeEvent, useTransition } from "react"
import { useLocale } from "next-intl";
import uniqid from "uniqid";

import { useRouter } from "@/lib/i18nNavigation";
import { localesWithLabels } from "@/i18n";



function LanguageSelector() {
    const [isPending, startTransition] = useTransition()
    const currentLocale = useLocale()
    const router = useRouter();

    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        const nextLocale = e.target.value;

        startTransition(() => {
            router.replace(`/`, { locale: nextLocale })
        });
    }

    return (
        <select className="select select-bordered select-xs max-w-xs" onChange={handleChange} value={currentLocale} disabled={isPending}>
            {
                localesWithLabels.map(locale => (
                    <option key={uniqid()} value={locale.locale} className={`fi fi-en ${locale.locale}`}>
                        {locale.label}
                    </option>
                ))
            }
        </select>
    )
}

export default LanguageSelector