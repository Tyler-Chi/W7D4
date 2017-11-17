import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  pokemon: state.entities.pokemon[state.ui.pokeDisplay],
  items: state.entities.items
});

const mapDispatchToProps = dispatch => ({

  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))

});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);
