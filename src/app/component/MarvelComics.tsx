import React, { useState } from 'react';
import { Comics } from '../services/comics';
import Image from 'next/image';


export const MarvelComics: React.FC = () => {
  const comics: IComic[] = Comics();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredComics = comics.filter((comic) =>
    comic.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-zinc-800">
      <h1 className="text-center text-3xl text-red-700 font-bold mb-8 mt-0 pt-5">Marvel Comics</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search comics"
          className="px-4 py-2 border border-gray-300 rounded-lg"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="grid bg-zinc-800 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        {filteredComics.map((comic) => (
          <div key={comic.id} className="bg-zinc-900 rounded-lg shadow-md flex">
            <div className="w-1/2">
              <Image width={128} height={128} src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt={comic.title} />
            </div>
            <div className="p-4">
              <h3 className="text-lg text-zinc-200 font-semibold mb-2">{comic.title}</h3>
              <p className="text-zinc-300 mb-4">{comic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
