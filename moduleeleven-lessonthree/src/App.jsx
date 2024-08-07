// src/App.js
import React, { useState } from 'react';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import './App.css';

const App = () => {
  const [selectedCharacterId, setSelectedCharacterId] = useState(null);

  return (
    <div className="app">
      <CharacterList onCharacterSelect={setSelectedCharacterId} />
      <CharacterDetail characterId={selectedCharacterId} />
    </div>
  );
};

export default App;