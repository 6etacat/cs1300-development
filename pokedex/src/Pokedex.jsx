import React, { Component } from 'react';
import pokedex from './pokedex.json';
import './Pokedex.css';
import Entry from './Entry.jsx'
import Header from './Header.jsx'
import LazyLoad from 'react-lazyload';

class Pokedex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processedPokemons: null,
      changed: true,
      pageCount: 1
    };
  }

  updateRender = (newState) => {
    newState.changed = true;
    this.setState(newState);
  }

  handlePageClick = () => {
    
  }

  static sortBy(crit, order) {
    if (order === 'asc') {
      return (a, b) => 0.5 - (a[crit] < b[crit]);
    } else {
      return (a, b) => 0.5 - (a[crit] > b[crit]);
    }
  }

  static generateFilterFn(generation, type) {
    if (generation === "all" && type === "all") {
      return (pokemon) => true;
    } else if (generation === "all") {
      return (pokemon) => pokemon.type_1 === type || pokemon.type_2 === type;
    } else if (type === "all") {
      return (pokemon) => pokemon.generation === generation;
    } else {
      return (pokemon) => pokemon.generation === generation && (pokemon.type_1 === type || pokemon.type_2 === type);
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (state.changed) {
      let temp = pokedex;
      if (state.generation !== "all" || state.type !== "all") {
        temp = temp.filter(Pokedex.generateFilterFn(state.generation, state.type));
      }
      if (state.crit !== "number" || state.order !== "asc") {
        temp = temp.concat().sort(Pokedex.sortBy(state.crit, state.order));
      }
      return {
        processedPokemons: temp
      };
    } else {
      return {processedPokemons: state.processedPokemons};
    }
  }

  render() {
    return (
      <div id="top" className="Pokedex">
        <h1>Pokédex</h1>
        <p>This Pokédex uses data cached from <a href="https://pokeapi.co/">PokéAPI</a>. </p>
        <div className="entry-container">
          <Header update={this.updateRender} />
          {this.state.processedPokemons.map(pokemon =>
            <LazyLoad height={116} once>
              <Entry pokemon={pokemon} key={pokemon.number} />
            </LazyLoad>
          )}
        </div>
      </div>
    );
  }
}

export default Pokedex;
