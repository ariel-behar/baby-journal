import AddPostModalButton from "@/components/Buttons/AddPostModalButton"

import DashboardPosts from "@/components/Dashboard/DashboardPosts"

async function DashboardPage() {
	return (
		<section className="flex-grow lg:h-[calc(100vh-250px)] overflow-y-scroll px-3">
			<div className="flex justify-between">
				<h3 className="text-xl uppercase text-center">Dashboard</h3>
				<AddPostModalButton />
			</div>

			<DashboardPosts />
		</section>
	)
}

export default DashboardPage