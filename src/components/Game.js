import React from "react";
import "./Game.css";
import { Link } from "react-router-dom";

const Game = props => {
  // console.log("props", props.data.id);
  // console.log(props.id);
  // console.log(props);
  return (
    <div className="Game-container">
      <img
        className="imgStyle"
        src={props.data.background_image}
        alt={props.data.name}
      />
      <div className="Game-details-container">
        <h1>{props.data.name}</h1>
        <div>
          Genre :
          {props.data.genres.map(genre => {
            return <span> {genre.name}</span>;
          })}
        </div>
        <div>Game Id : {props.data.id}</div>
        <input
          className="Erase-btn"
          type="button"
          value="Erase"
          onClick={() => {
            props.remove(props.index);
          }}
        />
        <diV>
          <Link
            to={`/jeu/screenshots/${props.data.id}`}
            index={props.data.id}
            className="screen"
          >
            Screen
          </Link>
        </diV>
      </div>
    </div>
  );
};

export default Game;

// onClick={() => props.remove(...)}
// onClick={props.best}

// comment utiliser le console.log = les 3/4 du temps c'est en dessous du render et au dessus du return
// quand mettre les props

// quand utiliser le this et le bind = me bind cest que en ES5 mais on regle le probleme avec de l'ES6 la fonction flêché.
// class Characters extends React.Component {
//     constructor(props) {
//         super();
//     state = {
//         characters: []
//     };
//     this.handleClick = this.handleClick.bind(this);

//     handleClick() {
//         console.log(this.state.characters)
//     }
// }
// }

// pourquoi la fonction fléché regle le probleme du this
