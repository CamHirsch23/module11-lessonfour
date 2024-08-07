// src/CharacterList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterList.css';

const CharacterList = ({ onCharacterSelect }) => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=YOUR_PUBLIC_KEY&hash=9ccad682bbb28d018de9686080cdcb4e');
      setCharacters(response.data.data.results);
    };

    fetchCharacters();
  }, []);

  return (
    <div className="character-list">
      {characters.map(character => (
        <div key={character.id} onClick={() => onCharacterSelect(character.id)}>
          <h3>{character.name}</h3>
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        </div>
      ))}
    </div>
  );
};

export default CharacterList;