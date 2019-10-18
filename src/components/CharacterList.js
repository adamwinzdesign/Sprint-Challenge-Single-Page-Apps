import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    // Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/`)
			.then(response => {
        console.log(response)
        const characters = response.data.results.filter(character => 
          character.name.toLowerCase().includes(query.toLowerCase)()
        );
        setCharacters(characters);
        // setCharacters(response.data.results);
  		})
			.catch(error => {
				console.log(error);
			});
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  }
  
  return (
    <section className="character-list">
      <h1>Check out your favorite characters!</h1>
      <form className = 'search'>
        <input
          type = 'text'
          onChange = {handleInputChange}
          value = {query}
          name = 'name'
          tabIndex = '0'
          className = 'prompt search-name'
          placeholder = 'Search by Name'
          autoComplete = 'off'
        />
      </form>
      <div className = 'results'>
        {characters.map(data => {
          return (
            <CharacterCard key={data.index} character={data.character} />
          )
        })}
      </div>
      {/* {characters.map((character, index) => {
        return <CharacterCard key={index} character={character} />
        })} */}
    </section>
  );
}
