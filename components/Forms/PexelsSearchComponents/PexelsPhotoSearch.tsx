"use client"
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { createClient, ErrorResponse, Photo, PhotosWithTotalResults } from 'pexels';

import { IPost } from '@/models/Post';
import { IPostFormData } from '../AddEditPostForm';

import FormInputLabel from '../FormComponents/FormInputLabel';
import PexelsPagination from './PexelsPagination';
import PexelsSelectedImage from './PexelsSelectedImage';
import PexelsPhotoGrid from './PexelsPhotoGrid';
import FormErrorTooltip from '../FormComponents/FormErrorTooltip';
import PexelsSelectImageButton from './PexelsSelectImageButton';
import PexelsSelectedPhotoHiddenURL from './PexelsSelectedPhotoHiddenURL';
import IconCheck from '@/components/Icons/IconCheck';

export interface IPhotosWithTotalResults extends PhotosWithTotalResults {
    prev_page: number | null;
}

interface Props {
    register: UseFormRegister<IPostFormData>,
    errors: FieldErrors,
    name: keyof IPostFormData,
    post?: IPost,
    setValue: UseFormSetValue<IPostFormData>;
}

function PexelsPhotoSearch({
    register,
    errors,
    name,
    post,
    setValue
}: Props) {
    const t = useTranslations('Forms')
    const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY as string);
    const query = 'babies'
    const perPage = 6;
    const [page, setPage] = useState<number>(1);
    const [photosWithTotalResults, setPhotosWithTotalResults] = useState<IPhotosWithTotalResults | null>(null)
    const [photos, setPhotos] = useState<Photo[] | null>(null)
    const [selectedPhotoObject, setSelectedPhotoObject] = useState<Photo | null>(null)
    const [selectedPhoto, setSelectedPhoto] = useState<IPost['img'] | string | undefined>(post?.img)
    const [isUserSelectingImage, setIsUserSelectingImage] = useState<boolean>(false)

    useEffect(() => {
        searchPhotos(query)
        if (post) {
            setValue('img', post.img, { shouldValidate: true, shouldDirty: true })
        }
    }, [query, page])

    const searchPhotos = (query: string) => {
        client.photos.search({ query, per_page: perPage, page })
            .then(data => {
                setPhotosWithTotalResults(data as IPhotosWithTotalResults)
                setPhotos((data as IPhotosWithTotalResults).photos)
            })
            .catch((error: ErrorResponse) => console.error(error))
    }

    const handleSelectPhoto = (photo: Photo) => {
        setSelectedPhotoObject(photo)
        setSelectedPhoto(photo.src.landscape)
        setIsUserSelectingImage(false)
        setValue('img', photo.src.landscape, { shouldValidate: true, shouldDirty: true })
    }

    const handlePageChange = (page: number) => {
        setPage(page)
    }

    const handleUserSelectingImage = (isUserSelectingImage: boolean) => {
        setIsUserSelectingImage(isUserSelectingImage)
    }

    return (
        <div>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row justify-start flex-grow'>
                    <FormInputLabel classes='!w-auto mr-1' label={t('labels.image')} name={name} />

                    {selectedPhoto && <IconCheck stroke='#3673fd' strokeWidth={4} />}
                </div>

                {
                    isUserSelectingImage
                        ? (
                            <PexelsPagination photosWithTotalResults={photosWithTotalResults} handlePageChange={handlePageChange} currentPage={page} />
                        )
                        : <PexelsSelectImageButton handleUserSelectingImage={handleUserSelectingImage} />
                }
            </div>

            <FormErrorTooltip name={name} errors={errors}>
                {
                    isUserSelectingImage && (
                        <PexelsPhotoGrid photos={photos} handleSelectPhoto={handleSelectPhoto} />
                    )
                }

                {
                    (!isUserSelectingImage && selectedPhoto) && (
                        <div className='flex flex-col items-center gap-y-3 mt-3'>
                            <PexelsSelectedImage selectedPhotoObject={selectedPhotoObject} selectedPhoto={selectedPhoto} />

                            <PexelsSelectedPhotoHiddenURL selectedPhotoObject={selectedPhotoObject} register={register} name={name} post={post} />
                        </div>
                    )
                }
            </FormErrorTooltip>
        </div>
    )
}

export default PexelsPhotoSearch