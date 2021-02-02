import React from 'react';

const ModalView = () => {
    return (
      <div className="modal">
        <div className="modal-item">
          <div className="modal-image">Modal Image</div>
          <div className="modal-close"><i class="far fa-times-circle"></i></div>
          <div className="modal-text">Modal Caption</div>    
        </div>
      </div>
    )
}

export default ModalView;
