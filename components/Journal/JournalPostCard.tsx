import Image from "next/image"
import { Link } from "@/lib/i18nNavigation";
import { getTranslations } from "next-intl/server";
import { format } from "date-fns";

import { ICustomSession } from "@/types/types";
import { IPostPopulated } from "@/models/Post";

import IconChevronRight from "../Icons/IconChevronRight";
import LikeButton from "../Buttons/LikeButton";
import LikeCounter from "./LikeCounter";
import LinkButton from "../Buttons/LinkButton";

interface Props {
	post: IPostPopulated,
	user: ICustomSession['user'] | undefined
}

async function JournalPostCard({
	post,
	user
}: Props) {
	const t = await getTranslations('JournalPage')


	return (
		<article className="card w-full bg-dark-soft text-primary-content shadow-xl">
			<Link href={`/journal/${post._id}`}>
				<figure className="w-full h-[100px] sm:h-[300px] relative rounded-t-xl">
					<Image className="object-cover transform hover:scale-105 duration-700" src={post.img} alt={t('post')} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
				</figure>
			</Link>

			<div className="card-body p-2 sm:p-4 md:p-8 gap-y-0">

				{/* On Extra small screen */}
				<time className="block sm:hidden text-xs text-muted text-end mb-0">
					{format(new Date(post.createdAt), "dd-MM-yyyy")}
				</time>

				<div className="flex flex-row justify-between items-start mb-1 w-full">
					<span className="text-xs sm:text-sm text-muted">
						{t('author').toLowerCase()} {post.user.firstName} {post.user.lastName}
					</span>


					{/* From small screens onwards */}
					<time className="hidden sm:block text-sm text-muted text-end mb-0">
						{format(new Date(post.createdAt), "dd-MM-yyyy")}
					</time>
				</div>

				<h4 className="card-title w-full break-words inline-block text-base sm:text-xl">
					<Link href={`/journal/${post._id}`}>
						{post.title}
					</Link>
				</h4>

				<div className="card-actions justify-between items-center mt-0 sm:mt-2 flex-grow">
					<div className="flex flex-row items-center gap-2 min-h-[20px]">
						{!(user?.id == post.user._id) && <LikeButton post={post} user={user} />}

						<LikeCounter isPostOwner={user?.id == post.user._id} likes={post.likes} />
					</div>

					<div className="flex flex-row justify-end items-end w-full">
						<LinkButton href={`/journal/${post._id}`} >
							{t('read-more')}
							<IconChevronRight />
						</LinkButton>
					</div>
				</div>
			</div>
		</article>
	)
}

export default JournalPostCard