import React from 'react';
import './Game.css';
import { Link } from 'react-router-dom';

const Game = (props) => {
  return (
    <div className="Game-container">
      <img
        className="imgStyle"
        src={props.popo.background_image}
        alt={props.popo.name}
      />
      <div className="Game-details-container">
        <h3>{props.popo.name}</h3>
        <div>
          Genre :
          {props.popo.genres.map((genre) => {
            return <span> {genre.name}</span>;
          })}
        </div>
        <div>Game Id : {props.popo.id}</div>
        <input
          className="Erase-btn"
          type="button"
          value="Erase"
          onClick={() => {
            props.remove(props.index);
          }}
        />
        <div>
          <Link
            to={`/jeu/screenshots/${props.popo.id}`}
            index={props.popo.id}
            className="screen"
          >
            Screen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Game;
