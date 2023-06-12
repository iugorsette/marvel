import React, { useEffect, useState } from 'react';
import fetch from 'isomorphic-fetch';
import { MD5 } from 'crypto-js';

interface Character {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export const MarvelCharacters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const publicKey = '458c161524b046cd73f5f776e923ec64';
        const privateKey = 'd566366ff7e77a690341d0ed8ad3e459009b5c83';
        const timestamp = new Date().getTime().toString();
        const hash = MD5(timestamp + privateKey + publicKey);
        const url = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;

        const response = await fetch(url);
        const data = await response.json();

        setCharacters(data.data.results);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div>
      <h1>Marvel Characters</h1>
      {characters.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
        </div>
      ))}
    </div>
  );
};