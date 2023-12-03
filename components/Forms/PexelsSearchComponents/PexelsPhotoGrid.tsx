import uniqid from 'uniqid';

import { Photo } from 'pexels';

import PexelsPhoto from './PexelsPhoto';

interface Props {
    photos: Photo[] | null;
    handleSelectPhoto: (photo: Photo) => void;
}

function PexelsPhotoGrid({
    photos,
    handleSelectPhoto
}: Props) {
    return (
        <div className='grid grid-cols-3 gap-1 mt-3'>
            {
                photos?.length && photos.map((photo) => (
                    <PexelsPhoto key={uniqid()} photo={photo} handleSelectPhoto={handleSelectPhoto} />
                ))
            }
        </div>
    )
}

export default PexelsPhotoGrid