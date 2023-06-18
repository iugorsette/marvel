import React, { useEffect, useState } from 'react';
import fetch from 'isomorphic-fetch';
import { MD5 } from 'crypto-js';


export const Characters = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const publicKey = process.env.PUBLIC_KEY
        const privateKey = process.env.PRIVATE_KEY
        const timestamp = new Date().getTime().toString();
        const hash = MD5(timestamp + privateKey + publicKey);
        const url = `https://gateway.marvel.com/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&limit=20&orderBy=-modified`;

        const response = await fetch(url);
        const data = await response.json();

        setCharacters(data.data.results);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCharacters();
  }, []);


  return characters;
};