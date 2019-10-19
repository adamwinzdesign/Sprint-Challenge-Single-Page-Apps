import React, { useEffect, useState } from "react";
import axios from "axios";
// import CharacterCard from "./CharacterCard";

export default function CharacterList() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredCharacter, setFilteredCharacter] = useState('');

  useEffect(() => {
    axios.get(
     ' https://rickandmortyapi.com/api/'
    )
    .then(response => {
      console.log('Rick and Morty Characters: ', response);
      setData(response.data);
      setFilteredCharacter(response.data);
    })
  }, []);

  useEffect(() => {
    setFilteredCharacter(
      data.filter(character =>
        character.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="Search By Name"
          autoComplete="off"
        />
      </form>
      <div>
        {/* now map through the new filtered data */}
        {filteredCharacter.map(data => {
          return (
            <div className="character-list " key={data._id}>
              <h3>Species: {data.species}</h3>
              <h3>Status: {data.status}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
