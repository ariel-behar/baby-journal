import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import AddPostModalButton from "@/components/Buttons/AddPostModalButton"
import DashboardPosts from "@/components/Dashboard/DashboardPosts"

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Welcome to your Baby Journal Dashboard. Easily access and manage your baby's activities, milestones, and daily events. Enjoy a seamless overview of your motherhood journey all in one place."
};

async function DashboardPage() {
	const t = await getTranslations("DashboardPage");
	
	return (
		<section className="flex-grow lg:h-[calc(100vh-250px)] px-3 w-screen">
			<div className="flex justify-between">
				<h3 className="small-title">{t('title')}</h3>
				<AddPostModalButton />
			</div>

			<DashboardPosts />
		</section>
	)
}

export default DashboardPage