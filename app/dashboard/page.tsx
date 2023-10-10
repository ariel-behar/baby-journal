import DashboardPosts from "@/components/Dashboard/DashboardPosts"
import DashboardUser from "@/components/Dashboard/DashboardUser";
import { auth } from "@/lib/auth"
import { Session } from "next-auth"

async function DashboardPage() {
	const session: Session | null = await auth();


	return (
		<>
			<div className="flex justify-between">
				<section>
					<DashboardPosts />
				</section>
				<section>
					<DashboardUser session={session} />
				</section>
			</div>
		</>
	)
}

export default DashboardPage