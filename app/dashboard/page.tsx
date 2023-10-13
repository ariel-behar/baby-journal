import AddPostModalButton from "@/components/Buttons/AddPostModalButton"

import DashboardPosts from "@/components/Dashboard/DashboardPosts"

async function DashboardPage() {
	return (
		<>
			<section>
				<div className="flex justify-between">
					<h3>Posts</h3>
					<AddPostModalButton />
				</div>
				
				<DashboardPosts />
			</section>
		</>
	)
}

export default DashboardPage