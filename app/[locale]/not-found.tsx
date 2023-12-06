import Image from "next/image"
import { getTranslations } from "next-intl/server";

import LinkButton from "@/components/Buttons/LinkButton";
import IconHome from "@/components/Icons/IconHome";

async function NotFound() {
    const t = await getTranslations('NotFoundPage')

    return (
        <section className="flex-grow lg:h-[calc(100vh-250px)] flex flex-col justify-center items-center px-5">
            <div className='flex flex-col gap-7'>
                <h4 className="text-6xl text-center block md:hidden">{t('error-404')}</h4>
                <h3 className="text-2xl md:text-4xl text-center">{t('sorry-the-page-you-are-looking-for-does-not-exist')}</h3>

                <div className="flex flex-col md:flex-row gap-y-5 justify-around items-center w-full">
                    <h4 className="text-6xl text-center hidden md:block">{t('error-404')}</h4>

                    <figure className="relative w-[200px] h-[150px] sm:h-[300px] flex flex-row items-center">
                        <Image src="/img/baby-crying.png" alt="Not Found" priority fill className="object-contain" sizes="20vw" />
                    </figure>

                    <LinkButton href='/' className="mt-5 md:mt-0 btn-md md:btn-lg btn-primary">{t('go-home')} <IconHome /></LinkButton>
                </div>
            </div>
        </section>
    )
}

export default NotFound