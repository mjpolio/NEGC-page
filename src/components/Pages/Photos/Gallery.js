import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';


const Gallery = ({id, title, photos}) => {
    const imageList = photos.map((photo) => {
        return (
            <a href={photo}>
			        <img src={photo} alt="garden" className="photos-section-item" />
            </a>
        )
    })

    return (
        <div>
            <div className="heading heading-secondary photos-section-title">
              {title}
			    <div className='underline'></div>
            </div>
            <SRLWrapper>
                <div className="photos-section-gallery">
                {imageList}
                </div>
            </SRLWrapper>
        </div>
      )
}

export default Gallery;
