import React, { useEffect, useState } from 'react';
import fetch from 'isomorphic-fetch';
import { MD5 } from 'crypto-js';

export const Comics = () => {
  const [comics, setComics] = useState<IComic[]>([]);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const publicKey = '458c161524b046cd73f5f776e923ec64'
        const privateKey = 'd566366ff7e77a690341d0ed8ad3e459009b5c83'
        const timestamp = new Date().getTime().toString();
        const hash = MD5(timestamp + privateKey + publicKey);
        const url = `https://gateway.marvel.com/v1/public/comics?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;

        const response = await fetch(url);
        const data = await response.json();       

        setComics(data.data.results);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchComics();
  }, []);

  return comics;
};
