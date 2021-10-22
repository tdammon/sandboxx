import React from 'react';
import './styledCardStyles.css';

export const StyledCard = ({
  ariaLabel,
  cardID,
  onClickFunction,
  thumbnail,
  title,
}) => {
  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      onClickFunction();
    }
  };
  return (
    <div
      id={cardID}
      className="styled-card"
      aria-label={ariaLabel}
      onClick={onClickFunction}
      role="button"
      tabIndex="0"
      onKeyDown={(event) => handleKeyPress(event)}>
      <img src={thumbnail} alt="" className="card-image" />
      <div className="card-title">{title}</div>
    </div>
  );
};
