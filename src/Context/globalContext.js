import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [gameData, setGameData] = React.useState([]);
  const [specificGameData, setSpecificGameData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const getGameDataByReleaseDate = (platform, category, sort) => {
    setIsLoading(true);
    let platformVar;
    let categoryVar;
    let sortVar;
    if (platform) {
      platformVar = `platform=${platform}`;
    }
    if (category) {
      categoryVar = `category=${category}`;
    }
    if (sort) {
      sortVar = `sort-by=${sort}`;
    }
    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?${platformVar}&${categoryVar}&${sortVar}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
          'x-rapidapi-key':
            'ff085694edmsh33c69a72fbf53efp142e53jsn80ae0ebb3cec',
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setGameData(data);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };

  const getSpecificGameDetails = (id) => {
    setIsLoading(true);
    fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
          'x-rapidapi-key':
            '0621e9a9a7mshc45e9d5327372ddp10eb33jsn89198f375f2d',
        },
      },
    )
      .then((response) => response.json())
      .then((data) => {
        setSpecificGameData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.error(err);
      });
  };
  return (
    <GlobalContext.Provider
      value={{
        gameData,
        isLoading,
        specificGameData,
        getGameDataByReleaseDate,
        getSpecificGameDetails,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;

GlobalContextProvider.propTypes = {
  // eslint-disable-next-line react/require-default-props
  children: PropTypes.node,
};
