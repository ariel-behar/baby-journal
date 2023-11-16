import { useTranslations } from "next-intl";

import LinkButton from "@/components/Buttons/LinkButton";

export default function HomePage() {
	const t = useTranslations()

	return (
		<div
			className="flex-grow px-3 sm:px-5 flex flex-col text-center items-center lg:items-start justify-center bg-no-repeat bg-contain bg-right-bottom"
			style={{ backgroundImage: 'url("/img/mother-holding-baby.png"' }}
		>
			<section className="flex flex-col gap-y-8 md:gap-[50px] items-center w-full lg:w-3/5" >
				<div className="flex flex-col gap-y-5">

					<h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl">{t('HomePage.title')}</h1>
					<h3 className="text-lg lg:text-2xl">{t('HomePage.subtitle')}</h3>
				</div>

				<div className="w-full flex flex-row justify-around sm:justify-center items-center gap-x-3 lg:gap-x-10">
					<div className="flex justify-center" >
						<img src='/img/crawling-baby-transparent.gif' alt="Hero" className="max-h-[70px] md:max-h-[100px] lg:max-h-[150px] w-auto" />
					</div>

					<div className="flex gap-x-3 lg:gap-x-10">
						<LinkButton href="/blog" className="lg:btn-lg btn-primary">
							{t('Common.learn_more')}
						</LinkButton>

						<LinkButton href="/login" className="lg:btn-lg btn-secondary">
							{t('Common.login')}
						</LinkButton>
					</div>
				</div>

				<p className="md:text-lg">{t("HomePage.description")}</p>
			</section>


		</div>
	);
}
