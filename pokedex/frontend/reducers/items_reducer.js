import { RECEIVE_POKEMON, RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';



const itemsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_POKEMON:
      newState = action.pokemonData.items;
      return newState;
    default:
      return state;
  }
};

export default itemsReducer;
