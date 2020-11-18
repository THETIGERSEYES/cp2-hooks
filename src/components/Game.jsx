import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Game.css';

// L'idée du composant Game était de récupérer les infos de l'api via les props
// On devait gérer ici la mise en favori d'un jeu
// Voici une des plusieurs façons possibles : en passant par un bouton
// On aurait pu réaliser une ternaire pour faire un switch d'emoji également
const Game = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const { game, deleteGame } = props;
  
  return (
    <div className='Game'>
      <Link to={{ pathname: `/${game.id}` }}>
        <span>{game.name}</span>
      </Link>
      <span>Rated: {game.rating}</span>
      <img src={game.background_image} alt={game.name} />
      <button className='favorite' onClick={() => setIsFavorite(!isFavorite)}>
        {isFavorite ? 'Dislike' : 'Like'}
      </button>
      {isFavorite && (
        <img src='https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/yellow-heart.png' className="Emoji" alt='emoji'/>
      )}
      <button onClick={() => deleteGame(game.id)}>
        Delete
      </button>
    </div>
  );
};

export default Game;