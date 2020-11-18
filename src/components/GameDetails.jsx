import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// J'ai simplifié au maximum ici
// On récupère maintenant l'adresse de l'api mais par rapport à l'id d'un jeu en paramètre

const GameDetails = (props) => {
  const [trailer, setTrailer] = useState();
  const gameId = props.match.params.id;

  useEffect(() => {
    axios
      .get(`https://apis.wilders.dev/wild-games/games/${gameId}`)
      .then((res) => {
        setTrailer(res.data.clip.clip);
      })
  }, [gameId]);

  return (
    <section className='GameDetails'>
      <Link to={{pathname: '/'}}>Go back</Link>
      <p>Trailer:</p>
      <video controls src={trailer} />
    </section>
  );
};

export default GameDetails;