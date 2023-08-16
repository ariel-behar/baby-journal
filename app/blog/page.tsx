import PostCard from "@/components/PostCard"

function BlogPage() {
	return (
		<div className="flex flex-wrap">
			<div className="w-full sm:w-1/2 md:w-1/3">
				<PostCard />
			</div>
			<div className="w-full sm:w-1/2 md:w-1/3">
				<PostCard />
			</div>
			<div className="w-full sm:w-1/2 md:w-1/3">
				<PostCard />
			</div>
			<div className="w-full sm:w-1/2 md:w-1/3">
				<PostCard />
			</div>

		</div>
	)
}

export default BlogPage