import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = action.pokemon;
      return merge({}, state, newState);
    case RECEIVE_POKEMON:
      newState = {[action.pokemonData.pokemon.id]: action.pokemonData.pokemon};

      return merge({}, state, newState);

    default:
      return state;
  }
};

export default pokemonReducer;
