import React from 'react';
import './styledGridStyles.css';

export const StyledGrid = ({ ariaLabel, gridID, children }) => {
  return (
    <div id={gridID} className="styled-grid" aria-label={ariaLabel}>
      {children}
    </div>
  );
};
