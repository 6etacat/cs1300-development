import React, { Component } from 'react';
import './Entry.css';
import arrow from './arrow.svg';
import top from './top.png';
import ReactSVG from 'react-svg'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "all",
      generation: "all",
      crit: "number",
      order: "asc",
      ordering: [
        "number", "name", "height", "weight", "", "hp", "attack", "defense", "special-attack", "special-defense", "speed"
      ]
    };
    this.updateState();
  }

  getClass(id) {
    let classes = ["sort"];
    if (id === this.state.crit) {
      classes.push("enabled");
    }
    if (!(this.state.order === "desc" && id === this.state.crit)) {
      classes.push("reversed");
    }
    if (id === "") {
      classes = ["unseen"];
    }
    return classes.join(" ");
  }

  handleChange = (event) => {
    if (event.target.id === "type") {
      this.setState({ type: event.target.value }, this.updateState);
    } else if (event.target.id === "generation") {
      this.setState({ generation: event.target.value }, this.updateState);
    }
  }

  handleClick = (event) => {
    let id = event.currentTarget.id;
    let crit = this.state.crit;
    let order = this.state.order;
    if (id === this.state.crit) {
      if (this.state.order === "desc") {
        order = "asc";
      } else {
        order = "desc";
      }
    } else {
      crit = id;
      order = "asc";
    }
    this.setState({ crit: crit, order: order }, this.updateState);
  }

  updateState() {
    this.props.update(this.state);
  }

  updateRender() {
    this.props.render();
  }

  render() {
    return (
      <div className="header">
        <div className="entry">
          <a href="#top"><img class="top" src={top} alt="go to top" /></a>
          <div className="data">
            <table className="data-entry">
              <tbody>
                <tr>
                  <th>National Pokédex Number</th>
                  <th>Pokémon</th>
                  <th>Height (m)</th>
                  <th>Weight (kg)</th>
                  <th className="single-type">
                    <select id="type" onChange={this.handleChange}>
                      <option value="all">Type</option>
                      <option value="normal">Normal</option>
                      <option value="fire">Fire</option>
                      <option value="water">Water</option>
                      <option value="electric">Electric</option>
                      <option value="grass">Grass</option>
                      <option value="ice">Ice</option>
                      <option value="fighting">Fighting</option>
                      <option value="poison">Poison</option>
                      <option value="ground">Ground</option>
                      <option value="flying">Flying</option>
                      <option value="psychic">Psychic</option>
                      <option value="bug">Bug</option>
                      <option value="rock">Rock</option>
                      <option value="ghost">Ghost</option>
                      <option value="dragon">Dragon</option>
                      <option value="dark">Dark</option>
                      <option value="steel">Steel</option>
                      <option value="fairy">Fairy</option>
                    </select>
                  </th>
                  <th>HP</th>
                  <th>Attack</th>
                  <th>Defense</th>
                  <th>Special-Attack</th>
                  <th>Special-Defense</th>
                  <th>Speed</th>
                  <th>
                    <select id="generation" onChange={this.handleChange}>
                      <option value="all">Generation</option>
                      <option value="generation-i">I</option>
                      <option value="generation-ii">II</option>
                      <option value="generation-iii">III</option>
                      <option value="generation-iv">IV</option>
                      <option value="generation-v">V</option>
                      <option value="generation-vi">VI</option>
                      <option value="generation-vii">VII</option>
                    </select>
                  </th>
                </tr>
                <tr>
                  {this.state.ordering.map(id =>
                    <th key={id}><ReactSVG id={id} onClick={this.handleClick} className={this.getClass(id)} src={arrow} /></th>
                  )}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;