/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { StyledCard, StyledGrid } from '../../Components';

export const CardDisplay = ({ games }) => {
  const history = useHistory();
  return (
    <div>
      {games[0] ? (
        <StyledGrid>
          {games.map((card) => (
            <StyledCard
              key={`card-${card.id}`}
              thumbnail={card.thumbnail}
              title={card.title}
              onClickFunction={() => {
                history.push(`/${card.id}`);
              }}
            />
          ))}
        </StyledGrid>
      ) : null}
    </div>
  );
};
