import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { HashRouter, Route} from 'react-router-dom';



// import {fetchSinglePokemon, fetchAllPokemon} from './util/api_util';
import { receiveAllPokemon, requestAllPokemon, receivePokemon , requestSinglePokemon} from './actions/pokemon_actions';
import {selectAllPokemon, selectPokemonItem} from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.requestSinglePokemon = requestSinglePokemon;
  // window.selectAllPokemon = selectAllPokemon;
  window.selectPokemonItem = selectPokemonItem;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.receiveAllPokemon = receiveAllPokemon;
  // window.requestAllPokemon = requestAllPokemon;
  // window.fetchAllPokemon = fetchAllPokemon;
  // window.fetchSinglePokemon = fetchSinglePokemon;
  // window.receivePokemon = receivePokemon;


  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});
