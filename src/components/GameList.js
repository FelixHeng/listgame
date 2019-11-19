import React, { Component } from "react";
import axios from "axios";
import Game from "./Game";

import "./GameList.css";

class GameList extends Component {
  state = {
    games: [],
    value: "Best Games",
    change: false
  };

  getGames = () => {
    axios
      .get("https://wild-games.herokuapp.com/api/v1")
      .then(response => this.setState({ games: response.data }));
  };

  componentDidMount() {
    this.getGames();
  }

  handleDelete = indexStart => {
    const newGames = this.state.games;
    newGames.splice(indexStart, 1);
    this.setState({ games: newGames });
  };

  handleBest = () => {
    this.setState({ change: !this.state.change });
    this.state.change === false
      ? this.setState({ value: "All Games" })
      : this.setState({
          value: "Best Games"
        });
  };

  render() {
    console.log(this.props);
    return (
      <div className="gamelist-container">
        <input
          className="btn-handleBest"
          type="button"
          value={this.state.value}
          onClick={this.handleBest}
        />
        {this.state.games
          .filter(rat =>
            this.state.change ? rat.rating >= 4.5 : this.state.games
          )
          .map((game, id) => {
            console.log(this.state.games, "ececece");
            return (
              <div>
                <Game data={game} remove={this.handleDelete} index={id} />
              </div>
            );
          })}
      </div>
    );
  }
}

export default GameList;
