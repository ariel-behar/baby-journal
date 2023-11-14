import { useTranslations } from "next-intl";

import LinkButton from "@/components/Buttons/LinkButton";

export default function HomePage() {
	const t = useTranslations()

	return (
		<div className="flex-grow flex flex-col text-center items-center justify-center ">
			<section className="flex flex-col gap-[50px] items-center ">
				<div className="flex flex-col gap-y-5">

					<h1 className="text-6xl md:text-8xl">{t('HomePage.title')}</h1>
					<h3 className="text-xl md:text-2xl">{t('HomePage.subtitle')}</h3>
				</div>

				<p className="text-xl">{t("HomePage.description")}</p>

				<div className="w-full flex flex-row justify-between items-center px-40">
					<div className="flex justify-center">
						<img src='/img/crawling-baby-transparent.gif' alt="Hero" className="w-1/3" />
					</div>

					<div className="flex gap-x-10">
						<LinkButton href="/about" className="btn-lg btn-primary">
							{t('Common.learn_more')}
						</LinkButton>

						<LinkButton href="/login" className="btn-lg btn-secondary">
							{t('Common.login')}
						</LinkButton>
					</div>


				</div>
			</section>


		</div>
	);
}
