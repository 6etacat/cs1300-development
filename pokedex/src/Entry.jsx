import React, { Component } from 'react';
import './Entry.css';


class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeFilter: null,
      generationFilter: null,
    };
  }

  upperFirst(string) {
    return string.replace(/^\w/, c => c.toUpperCase())
  }

  renderType() {
    if (this.props.pokemon.type_2 != null) {
      return (
        <th>{this.upperFirst(this.props.pokemon.type_1)} / {this.upperFirst(this.props.pokemon.type_2)}</th>
      );
    } else {
      return (
        <th>{this.upperFirst(this.props.pokemon.type_1)}</th>
      );
    }
  }

  render() {
    return (
      <div className="entry">
          <img src={this.props.pokemon.image_url} alt={this.props.pokemon.name} />
          <div className="data">
            <table className="data-entry">
              <tbody>
                <tr>
                  <th>{this.props.pokemon.number}</th>
                  <th>{this.upperFirst(this.props.pokemon.name)}</th>
                  <th>{this.props.pokemon.height}</th>
                  <th>{this.props.pokemon.weight}</th>
                  {this.renderType()}
                  <th>{this.props.pokemon.hp}</th>
                  <th>{this.props.pokemon.attack}</th>
                  <th>{this.props.pokemon.defense}</th>
                  <th>{this.props.pokemon["special-attack"]}</th>
                  <th>{this.props.pokemon["special-defense"]}</th>
                  <th>{this.props.pokemon.speed}</th>
                  <th>{this.props.pokemon.generation.replace('generation-','').toUpperCase()}</th>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    );
  }
}

export default Entry;
