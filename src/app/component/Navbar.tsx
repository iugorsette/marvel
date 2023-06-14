import { useState } from "react";
import { MarvelCharacters } from "./MarvelCharacter";
import { MarvelComics } from "./MarvelComics";
import { Cart } from "./Cart"; // Importe o componente Cart

export function Navbar() {
  const [activeTab, setActiveTab] = useState("comics");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <nav className="bg-zinc-800 p-2">
        <ul className="flex justify-center space-x-4">
          <li
            className={`text-white cursor-pointer rounded-2xl py-2 px-3 ${
              activeTab === "comics" ? "bg-zinc-200 text-zinc-900" : "hover:bg-red-500"
            }`}
            onClick={() => handleTabChange("comics")}
          >
            Comics
          </li>
          <li
            className={`text-white cursor-pointer rounded-2xl py-2 px-3 ${
              activeTab === "character" ? "bg-zinc-200 text-zinc-900" : "hover:bg-red-500"
            }`}
            onClick={() => handleTabChange("character")}
          >
            Character
          </li>
          <li
            className={`text-white cursor-pointer rounded-2xl py-2 px-3 ${
              activeTab === "cart" ? "bg-zinc-200 text-zinc-900" : "hover:bg-red-500"
            }`}
            onClick={() => handleTabChange("cart")}
          >
            Cart
          </li>
        </ul>
      </nav>

      {activeTab === "comics" ? (
        <MarvelComics cardPerPage={30} offset={60} />
      ) : activeTab === "character" ? (
        <MarvelCharacters />
      ) : (
        <Cart />
      )}
    </>
  );
}
