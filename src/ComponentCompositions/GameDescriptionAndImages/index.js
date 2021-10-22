/* eslint-disable operator-linebreak */
import React from 'react';
import './gameDescriptionAndImagesStyles.css';

export const GameDescriptionAndImages = ({
  gameDetails,
  setModalImage,
  setModalOpen,
}) => {
  const handleKeyPress = (event, image) => {
    if (event.keyCode === 13) {
      setModalOpen(true);
      setModalImage(image);
    }
  };
  return (
    <div className="game-description-content">
      <div className="game-description">
        <h1>Description</h1>
        <p>{gameDetails.description}</p>
      </div>
      <div className="screenshot-container">
        {gameDetails.screenshots &&
          gameDetails.screenshots.map((image) => (
            <div
              key={`screenshot-${image.id}`}
              id={`screenshot-${image.id}`}
              className="screenshot-holder"
              role="button"
              tabIndex="0"
              onKeyDown={(event) => handleKeyPress(event, image)}
              onClick={() => {
                setModalOpen(true);
                setModalImage(image);
              }}>
              <img src={`${image.image}`} alt="" className="screenshot-image" />
            </div>
          ))}
      </div>
    </div>
  );
};
