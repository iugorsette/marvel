import React, { useEffect, useState } from "react";
import fetch from "isomorphic-fetch";
import { MD5 } from "crypto-js";

export const Comics = (cardPerPage: number, offset: number = 1) => {
  const [comics, setComics] = useState<IComic[]>([]);

  useEffect(() => {
    const fetchComics = async () => {
      try {
        const publicKey = process.env.PUBLIC_KEY
        const privateKey = process.env.PRIVATE_KEY
        const timestamp = new Date().getTime().toString();
        const hash = MD5(timestamp + privateKey + publicKey);
        const url = `https://gateway.marvel.com/v1/public/comics?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&limit=${cardPerPage*5}&orderBy=-issueNumber&offset=${offset}`;

        const response = await fetch(url);
        const data = await response.json();

        setComics(data.data.results);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchComics();
  }, [offset, cardPerPage]);

  return comics;
};

export const useComicById = (id: number): IComic | null => {
  const [comic, setComic] = useState<IComic | null>(null);

  useEffect(() => {
    const fetchComic = async () => {
      try {
        const publicKey = "458c161524b046cd73f5f776e923ec64";
        const privateKey = "d566366ff7e77a690341d0ed8ad3e459009b5c83";
        const timestamp = new Date().getTime().toString();
        const hash = MD5(timestamp + privateKey + publicKey).toString();
        const url = `https://gateway.marvel.com/v1/public/comics/${id}?apikey=${publicKey}&ts=${timestamp}&hash=${hash}`;

        const response = await fetch(url);
        const data = await response.json();

        setComic(data.data.results[0]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchComic();
  }, [id]);

  return comic;
};