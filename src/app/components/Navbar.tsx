import { useState } from "react";
import { MarvelCharacters } from "./MarvelCharacter";
import { MarvelComics } from "./MarvelComics";
import { Cart } from "./Cart";

export function Navbar() {
  const [activeTab, setActiveTab] = useState("comics");

  const handleTabChange = (tab: any) => {
    setActiveTab(tab);
  };
  const tabItems = [
    {
      id: "comics",
      label: "Comics",
      component: <MarvelComics cardPerPage={10} offset={0} />,
    },
    { id: "character", label: "Character", component: <MarvelCharacters /> },
    { id: "cart", label: "Cart", component: <Cart /> },
  ];

  const generateTabClass = (tabId: any) =>
    ` text-zinc-200 cursor-pointer rounded-lg py-2 px-3  shadow-lg ${
      activeTab === tabId ? "bg-zinc-900 text-zinc-200 " : "hover:bg-red-800"
    }`;

  return (
    <>
      <nav className="bg-zinc-800 p-2 ">
        <ul className="flex justify-center space-x-4">
          {tabItems.map((tab) => (
            <li
              key={tab.id}
              className={generateTabClass(tab.id)}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </nav>

      {tabItems.find((tab) => tab.id === activeTab)?.component}
    </>
  );
}
