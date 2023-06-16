import React, { useEffect, useState } from 'react';
import fetch from 'isomorphic-fetch';
import { MD5 } from 'crypto-js';

export const Events = () => {
  const [events, setEvents] = useState<IEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const publicKey = process.env.PUBLIC_KEY
        const privateKey = process.env.PRIVATE_KEY
        const timestamp = new Date().getTime().toString();
        const hash = MD5(timestamp + privateKey + publicKey);
        const url = `https://gateway.marvel.com/v1/public/events?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&limit=10&orderBy=-startDate`;

        const response = await fetch(url);
        const data = await response.json();       

        setEvents(data.data.results);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchEvents();
  }, []);

  return events
};
