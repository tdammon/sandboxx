import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../../Context/globalContext';
import {
  GameDetailDisplay,
  GameDescriptionAndImages,
} from '../../ComponentCompositions';
import { StyledModal } from '../../Components/StyledModal';
import './gamePageStyles.css';

const GamePage = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalImage, setModalImage] = React.useState({});
  const { id } = useParams();
  const { getSpecificGameDetails, isLoading, specificGameData } = useContext(
    GlobalContext,
  );

  useEffect(() => {
    getSpecificGameDetails(id);
  }, []);

  return (
    <div className="game-page">
      <StyledModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        modalImage={modalImage}
      />
      <GameDetailDisplay gameDetails={specificGameData} isLoading={isLoading} />
      <GameDescriptionAndImages
        gameDetails={specificGameData}
        setModalOpen={setModalOpen}
        setModalImage={setModalImage}
      />
    </div>
  );
};

export default GamePage;
