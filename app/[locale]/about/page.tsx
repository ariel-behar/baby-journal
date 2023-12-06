import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image"

export const metadata: Metadata = {
	title: "About",
	description: "Baby Journal is the ultimate web app designed for mothers to document their baby's activities, milestones, and precious moments. Seamlessly record daily events, share tips, and track your baby's growth and development. With intuitive features, you can add photos, write descriptions and like other mothers' baby achievements. Baby Journal keeps your memories safe and organized, making it easy to reflect on your motherhood journey and share insights with other moms. Join our community and start creating a beautiful, personalized diary for your baby today!"
};

async function AboutPage() {
	const t = await getTranslations("AboutPage");

	return (
		<section className="flex flex-col xl:flex-row items-center gap-5 md:gap-10 xl:gap-[100px] px-3 sm:px-5">

			<article className="order-2 lg:order-1 w-full xl:w-1/2 flex flex-col gap-[50px] text-center md:text-left justify-center">
				<h3 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">{t('title')}</h3>

				<div>
					<p className="text-xl text-justify">{t('paragraph-one')}</p>
					<br />
					<p className="text-xl text-justify">{t('paragraph-two')}</p>
				</div>
			</article>

			<figure className="order-1 lg:order-2 relative w-full xl:w-[40%] h-[200px] md:h-[300px] xl:h-[500px] ">
				<Image
					src="/img/baby-upside-down.png"
					alt="About Image"
					fill
					sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 50vw"
					priority
					className="object-contain"
				/>
			</figure>
		</section>
	)
}

export default AboutPage