import { Photo } from 'pexels';
import Image from 'next/image';

import { IPost } from '@/models/Post';

interface Props {
    selectedPhotoObject: Photo | null,
    selectedPhoto: IPost['img'] | string | undefined
}

function PexelsSelectedImage({
    selectedPhotoObject,
    selectedPhoto,
}: Props) {
    return (
        <figure className='h-[170px] w-[300px] sm:h-[250px] sm:w-[400px] relative overflow-hidden'>
            <Image className='object-cover rounded-md' src={selectedPhotoObject?.src.landscape || selectedPhoto || ''} alt={selectedPhotoObject?.alt ? selectedPhotoObject.alt : "Pexels Photo"} fill />
        </figure>
    )
}

export default PexelsSelectedImage