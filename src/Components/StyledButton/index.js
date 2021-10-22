import React from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
import './styledButtonStyles.css';

export const StyledButton = ({
  ariaLabel,
  buttonFunction,
  buttonID,
  disabled,
  text,
}) => {
  return (
    <button
      id={buttonID}
      className="styled-button"
      aria-label={ariaLabel}
      aria-disabled={disabled || false}
      disabled={disabled || false}
      onClick={buttonFunction}
      type="button">
      <span>{text}</span>
    </button>
  );
};
