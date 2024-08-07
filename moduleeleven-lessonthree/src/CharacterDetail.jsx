// src/CharacterDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CharacterDetail.css';

const CharacterDetail = ({ characterId }) => {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    if (characterId) {
      const fetchCharacterDetail = async () => {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=YOUR_PUBLIC_KEY&hash=9ccad682bbb28d018de9686080cdcb4e`);
        setCharacter(response.data.data.results[0]);
      };

      fetchCharacterDetail();
    }
  }, [characterId]);

  if (!character) return <div>Select a character to see details</div>;

  return (
    <div className="character-detail">
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      <h3>Comics:</h3>
      <ul>
        {character.comics.items.map(comic => (
          <li key={comic.resourceURI}>{comic.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterDetail;