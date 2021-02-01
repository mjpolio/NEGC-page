import React, { useState, useEffect } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';


const PhotosNav = (props) => {
  const [activeId, setActiveId] = useState(null);

  const setActiveItem = (e) => {
    props.onSelect(e.target.id);
    console.log(e);
    e.target.className += ' active';
  }

  const renderedTitles = props.images.map((gallery) => {
    return <li className="photos-nav-item" id={gallery.id} onClick={setActiveItem}>{gallery.title}</li>
  })

  return (
    <div className="photos-nav">
      <h2 className="photos-nav-header">Browse by Event:</h2>
      <ul className="photos-nav-list">
        {renderedTitles}
      </ul>
    </div>
  )
}

export default PhotosNav;
