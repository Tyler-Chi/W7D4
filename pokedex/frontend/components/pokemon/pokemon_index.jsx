import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import {HashRouter, Route} from 'react-router-dom';


class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    return this.props.requestAllPokemon();
  }

  render() {
    return (
      <div className="content">
        <ul className="pokemon-index">
          {
            this.props.pokemon.map((poke, idx) => (
              <PokemonIndexItem key={poke.id} pokemon={poke} />
            ))
          }
        </ul>
        <Route path = "/pokemon/:pokemonId" component = {PokemonDetailContainer}/>
      </div>
    );
  }
}

export default PokemonIndex;
