import { Photo } from "pexels"
import { UseFormRegister } from "react-hook-form"

import { IPostFormData } from "../AddEditPostForm"

import { IPost } from "@/models/Post"

interface Props {
	selectedPhotoObject: Photo | null,
	register: UseFormRegister<IPostFormData>
	name: keyof IPostFormData,
	post?: IPost
}

function PexelsSelectedPhotoHiddenURL({
	selectedPhotoObject,
	register,
	name,
	post
}: Props) {

	return (
		<textarea
			{...(register as UseFormRegister<IPostFormData>)(name)}
			rows={3}
			className="bg-dark-soft cursor-none select-disabled w-full resize-none text-sm text-center"
			disabled={true}
			hidden
			value={selectedPhotoObject?.src.medium ? selectedPhotoObject?.src.medium : post?.img ? post?.img : ''}
		/>
	)
}

export default PexelsSelectedPhotoHiddenURL