import React from 'react';
import ItemDetailContainer from '../items/item_detail_container';
import { Link, Route } from 'react-router-dom';

class PokemonDetail extends React.Component  {

  componentDidMount() {
    const id = this.props.match.params.pokemonId;
    return this.props.requestSinglePokemon(id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
      this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render(){
    const pokemon = this.props.pokemon;
    const items = this.props.items;
    let content;
    if (pokemon) {
      content =
        <div>
          <img src={pokemon.image_url}/>
          <h1>{pokemon.name}</h1>
          <h2>Type: {pokemon.poke_type}</h2>
          <h2>Attack: {pokemon.attack}</h2>
          <h2>Defense: {pokemon.defense}</h2>
          <h3>Moves: {pokemon.moves}</h3>
          <h3>Items:</h3>
          <ul className="pokemon-detail-items">
            {
              Object.keys(items).map(item_id => (
                <li key={item_id} >
                  <Link to={`/pokemon/${pokemon.id}/items/${item_id}`}>
                    <img src={items[item_id].image_url}/>
                  </Link>
                </li>
              ))

            }

          </ul>
          <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />

        </div>;
    }
    return (
      <div className="pokemon-detail">
        {content}
      </div>
    );
  }
}

export default PokemonDetail;
