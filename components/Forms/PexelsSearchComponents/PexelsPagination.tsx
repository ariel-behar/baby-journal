import { useTranslations } from 'next-intl';

import { IPhotosWithTotalResults } from './PexelsPhotoSearch';

import IconChevronRight from '@/components/Icons/IconChevronRight';
import IconChevronLeft from '@/components/Icons/IconChevronLeft';

interface Props {
    currentPage: number,
    photosWithTotalResults: IPhotosWithTotalResults | null,
    handlePageChange: (page: number) => void
}

function PexelsPagination({
    currentPage,
    photosWithTotalResults,
    handlePageChange
}: Props) {
    const t = useTranslations('Common')
    return (
        <div className='flex flex-row gap-x-5'>
            {
                photosWithTotalResults?.prev_page && (
                    <span onClick={() => handlePageChange(currentPage - 1)} className='cursor-pointer'><IconChevronLeft /></span>
                )
            }

            <p>{t('page')}&nbsp;{photosWithTotalResults?.page}</p>

            {
                photosWithTotalResults?.next_page && (
                    <span onClick={() => handlePageChange(currentPage + 1)} className='cursor-pointer'><IconChevronRight /></span>
                )
            }

        </div>
    )
}

export default PexelsPagination