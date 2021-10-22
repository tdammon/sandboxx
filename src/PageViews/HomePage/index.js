/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useContext, useEffect } from 'react';
import { CardDisplay, HeadFilter } from '../../ComponentCompositions';
import { GlobalContext } from '../../Context/globalContext';
import './homePageStyles.css';

const HomePage = () => {
  const isFirstRender = React.useRef(true);
  const { getGameDataByReleaseDate, gameData } = useContext(GlobalContext);

  useEffect(() => {
    if (isFirstRender.current) {
      getGameDataByReleaseDate(false, false, 'release-date');
      isFirstRender.current = false;
    }
  }, []);

  return (
    <div className="app">
      <HeadFilter
        games={gameData}
        getGameWithFilter={getGameDataByReleaseDate}
      />
      <CardDisplay games={gameData} />
    </div>
  );
};

export default HomePage;
