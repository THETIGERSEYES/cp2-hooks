import React, { useEffect, useState } from 'react';
import Game from './Game';
import axios from 'axios';

// Je prépare mes useState pour la récupération des données (game), filtrage (isFiltered)
// et ma gestion de loading et d'erreur axios (moins se focaliser sur la partie erreur)
const GameList = () => {
  const [games, setGames] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const [error, setError] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(true);
 
  // Je fetch dans mon useEffect avec une gestion d'erreurs (plusieurs façons de faire)
  useEffect(() =>{
    const fetchData = () => {
        axios
        .get('https://apis.wilders.dev/wild-games/games/')
        .then(res => setGames(res.data))
        .catch(err => { setIsError(!isError); setError({error}) })
        .finally(() => setLoading(!loading))
    }
    fetchData()
  }, [])

  // Ici ma méthode pour supprimer un jeu ! Comme on ne supprime pas sur l'api directement
  // On doit simplement faire un filter par l'id
    const handleDelete = (id) => {
        setGames(games.filter(item => item.id !== id))
    }

    // Mon state booléen isFiltered est géré par une ternaire
    // Grâce à la négation du isFIlterd et au premier map, on peut retrouver tous les jeux pas encore filtrés
    // Le filter puis map suivant permet un filtrage des jeux dont la note est > à 4.5
    return (
      <section className='GameList'>
        <button onClick={() => setIsFiltered(!isFiltered)}>
          {isFiltered ? 'All games' : 'Best games'}
        </button>
        <div>
          {!isFiltered
            ? games.map((game) => (
                <div key={game.id}>
                  <Game game={game} deleteGame={handleDelete}/>
                </div>
              ))
            : games
                .filter((game) => game.rating > 4.5)
                .map((game) => (
                  <div key={game.id}>
                    <Game game={game} />
                  </div>
                ))}
        </div>
      </section>
    );
};

export default GameList;
