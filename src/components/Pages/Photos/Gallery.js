import React, { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';


const Gallery = ({id, title, photos}) => {
    const [active, setActive] = useState(true);
    
    const imageList = photos.map((photo) => {
        return (
			<img src={photo} alt="fff" className="photos-section-item" />
        )
    })

    return (
        <div>
            <h2>Gallery {id}</h2>
            {/* <button onClick={() => setExpanded(!expanded)}>
              {expanded ? <FaMinusCircle /> : <FaPlusCircle />}
            </button> */}
          {active && <div className="photos-section-title">
              {title}
              </div>
            }
            {/* {expanded && <div className="photos-section-title">
              {title}
              </div>
            } */}
          {active && <div className="photos-section-gallery">
              {imageList}
              </div>
            }
            {/* {expanded && <div className="photos-section-gallery">
              {imageList}
              </div>
            } */}
        </div>
        
        
      )
}

export default Gallery;
