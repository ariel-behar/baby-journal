import { useTranslations } from 'next-intl'

import IconImage from '@/components/Icons/IconImage'

interface Props {
    handleUserSelectingImage: (handleUserSelectingImage: boolean) => void
}

function PexelsSelectImageButton({
    handleUserSelectingImage
}: Props) {
    const t = useTranslations('Forms')
    
    return (
        <div className='btn btn-sm btn-primary my-2 cursor-pointer mr-auto' onClick={() => handleUserSelectingImage(true)}>
            {t('select-image')}
            <IconImage />
        </div>
    )
}

export default PexelsSelectImageButton