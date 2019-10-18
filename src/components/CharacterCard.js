import React from "react";
import '../index.css';

export default function CharacterCard(props) {
  return (
    <div className="card-wrapper">
			<img src={props.character.image} alt="A Rick and Morty character" />
      <h1>{props.character.name}</h1>
      <h2>Species: {props.character.species}</h2>
      <h2>Status: {props.character.status}</h2>
		</div>
  );
}
