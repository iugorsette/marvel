import React, { useState } from "react";
import { Characters } from "../services/characters";
import { CharacterCard } from "./card/Character";


export const MarvelCharacters: React.FC = () => {
  const characters: ICharacter[] = Characters();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-zinc-800" > 
      <h1 className="text-center text-3xl text-red-700 font-bold mb-8 mt-0 pt-5">Marvel Characters</h1>
      <div className="flex justify-center mb-4">
        <input
          type="text"
          placeholder="Search characters"
          className="px-4 py-2 border border-gray-300 rounded-lg"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      <div className="grid bg-zinc-800 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} {...character} />
        ))}
      </div>

    </div>
  );
};
