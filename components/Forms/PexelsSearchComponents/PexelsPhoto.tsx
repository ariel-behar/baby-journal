import { Photo } from 'pexels';
import Image from 'next/image';

interface Props {
    photo: Photo
    handleSelectPhoto: (photo: Photo) => void
}

function PexelsPhoto({
    photo,
    handleSelectPhoto,
}: Props) {
    return (
        <button
            className='hover:scale-110 transition-all duration-300 hover:z-40 hover:rounded-md border-2 hover:border-white border-transparent box-border'
            onClick={() => handleSelectPhoto(photo)}
        >
            <figure className='h-[90px] w-[90px] sm:h-[140px] sm:w-[140px] relative overflow-hidden'>
                <Image className='object-cover ' src={photo.src.tiny} alt={photo.alt ? photo.alt : "Pexels Photo"} fill />
            </figure>
        </button>
    )
}

export default PexelsPhoto