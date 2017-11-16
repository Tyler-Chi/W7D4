import React from 'react';
import { Link } from 'react-router-dom';

const PokemonIndexItem = (props) => {
  let pokemon = props.pokemon;

  return (
    <li>
      <Link to={`/pokemon/${pokemon.id}`}>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image_url}/>
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
