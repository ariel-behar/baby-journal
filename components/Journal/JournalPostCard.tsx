import Image from "next/image"
import { Link } from "@/lib/i18nNavigation";
import { getTranslations } from "next-intl/server";
import { format } from "date-fns";

import { ICustomSession } from "@/types/types";
import { IPostPopulated } from "@/models/Post";

import IconChevronRight from "../Icons/IconChevronRight";
import LikeButton from "../Buttons/LikeButton";
import LikeCounter from "./LikeCounter";

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
				<figure className="w-full h-[300px] relative rounded-t-xl">
					<Image className="object-cover transform hover:scale-105 duration-700" src={post.img} alt={t('post')} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" priority />
				</figure>
			</Link>

			<div className="card-body p-4 md:p-8 gap-y-0">
				<div className="flex flex-row justify-between items-start mb-2">
					<span className="text-sm text-muted">
						{t('author')} {post.user.firstName} {post.user.lastName}
					</span>
					<time className="text-sm text-muted text-end mb-0">
						{format(new Date(post.createdAt), "dd-MM-yyyy")}
					</time>
				</div>

				<h4 className="card-title ">
					<Link href={`/journal/${post._id}`}>
						{post.title}
					</Link>
				</h4>

				<div className="card-actions justify-between items-center mt-2 flex-grow">
					<div className="flex flex-row items-center gap-2  min-h-[20px]">
						{(user && user.id != post.user._id) && <LikeButton post={post} user={user} />}
						{
							(user && user.id != post.user._id)
								? <LikeCounter likes={post.likes} />
								: <p className="text-muted text-sm">{t('you-are-the-author-of-this-post')}</p>
						}

						<LikeCounter likes={post.likes} />
					</div>

					<div className="flex flex-row justify-end items-end w-full">
						<Link href={`/journal/${post._id}`} className="btn btn-primary btn-sm btn-min-width uppercase">
							{t('read-more')}
							<IconChevronRight />
						</Link>
					</div>
				</div>
			</div>
		</article>
	)
}

export default JournalPostCard