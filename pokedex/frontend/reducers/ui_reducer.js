import { RECEIVE_POKEMON, RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    // case RECEIVE_ALL_POKEMON:
    //   newState = {pokeDisplay: -1 };
    //   return merge({}, state, newState);
    case RECEIVE_POKEMON:
      newState = {pokeDisplay: action.pokemonData.pokemon.id};
      return merge({}, state, newState);
    default:
      return state;
  }
};

export default uiReducer;
