import AddPostModalButton from "@/components/Buttons/AddPostModalButton"

import DashboardPosts from "@/components/Dashboard/DashboardPosts"

async function DashboardPage() {
	return (
		<>
			<section>
				<div className="flex justify-between mt-5 mb-3">
					<h3 className="text-xl uppercase text-center">Posts</h3>
					<AddPostModalButton />
				</div>
				
				<DashboardPosts />
			</section>
		</>
	)
}

export default DashboardPage