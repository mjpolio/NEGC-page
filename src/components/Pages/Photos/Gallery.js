import React from 'react';

const Gallery = ({id, title, photos}) => {
    const imageList = photos.map((photo) => {
        return (
			<img src={photo} alt="garden" className="photos-section-item" />
        )
    })

    return (
        <div>
            <div className="heading heading-secondary photos-section-title">
              {title}
			    <div className='underline'></div>
            </div>
           <div className="photos-section-gallery">
              {imageList}
            </div>
        </div>
      )
}

export default Gallery;
