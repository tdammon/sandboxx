import React from 'react';
import './styledModalStyles.css';

export const StyledModal = ({
  modalImage,
  modalOpen,
  modalID,
  setModalOpen,
}) => {
  return (
    <div
      id={modalID}
      className={`styled-modal-background modal-open-${modalOpen}`}>
      <div
        className="modal-container"
        aria-labelledby={`modal-body-${modalID}`}>
        <img
          src={modalImage.image}
          alt="modal-screenshot"
          className="modal-image"
        />
        <div id={`modal-body-${modalID}`} className="modal-body">
          <div className="modal-title">
            <button
              className="button-x"
              type="button"
              onClick={() => setModalOpen(false)}>
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
