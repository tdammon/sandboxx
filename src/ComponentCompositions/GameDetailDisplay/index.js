import React from 'react';
import './gameDetailDisplayStyles.css';
import CircularProgress from '@mui/material/CircularProgress';

export const GameDetailDisplay = ({ gameDetails, isLoading }) => {
  return (
    <div className="game-details-content">
      <div className="game-detail-header">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            <img
              src={gameDetails.thumbnail}
              alt=""
              className="game-details-background"
            />
            <h1>{gameDetails.title}</h1>
            <div className="game-detail-body">
              <p>{gameDetails.short_description}</p>
              <a href={`${gameDetails.game_url}`}>{gameDetails?.game_url}</a>
              <div className="game-detail-data">{`Genre:  ${gameDetails?.genre}`}</div>
              <div className="game-detail-data">{`Platform:  ${gameDetails?.platform}`}</div>
              <div className="game-detail-data">{`Publisher:  ${gameDetails?.publisher}`}</div>
              <div className="game-detail-data">{`Developer:  ${gameDetails?.developer}`}</div>
              <div className="game-detail-data">{`Release Date:  ${gameDetails?.release_date}`}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
