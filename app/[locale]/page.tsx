import { getTranslations } from "next-intl/server";

import LinkButton from "@/components/Buttons/LinkButton";
import { auth } from "@/lib/auth";
import { ICustomSession } from "@/types/types";
import { Session } from "next-auth";

async function HomePage() {
	const t = await getTranslations()
	const session: Session | null = await auth()
	const user = (session as ICustomSession)?.user;

	return (
		<section
			className="flex-grow px-3 sm:px-5 flex flex-col text-center items-center lg:items-start justify-center bg-no-repeat bg-contain bg-right-bottom"
			style={{ backgroundImage: 'url("/img/mother-holding-baby.png"' }}
		>
			<article className="flex flex-col gap-y-8 md:gap-[50px] items-center w-full lg:w-3/5" >
				<div className="flex flex-col gap-y-5">

					<h1 className="very-large-title">{t('HomePage.title')}</h1>
					<h4 className="text-lg lg:text-2xl">{t('HomePage.subtitle')}</h4>
				</div>

				<div className="max-w-[610px]">
					<div className="w-full flex flex-row justify-around sm:justify-center items-center gap-x-3 lg:gap-x-10 ">
						<figure className="flex justify-center" >
							<img src='/img/crawling-baby-transparent.gif' alt="Hero" className="max-h-[70px] md:max-h-[100px] lg:max-h-[150px] w-auto" />
						</figure>

						<div className="flex gap-x-3 lg:gap-x-10">
							<LinkButton href="/journal" className="lg:btn-lg btn-primary">
								{t('Common.learn-more')}
							</LinkButton>

							{
								!user && (
									<LinkButton href="/login" className="lg:btn-lg btn-secondary">
										{t('Common.login')}
									</LinkButton>
								)
							}
						</div>
					</div>
					<p className="mt-10">{t("HomePage.description")}</p>
				</div>
			</article>
		</section>
	);
}

export default HomePage;