import React, { useState } from "react";
import Image from "next/image";

export function CardComic(comic: IComic) {
  const [isTruncated, setIsTruncated] = useState(true);
  const maxChars = 120;
  const description = comic.description || "";

  const truncatedDescription = isTruncated
    ? description.slice(0, maxChars) + "..."
    : description;

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  const price = comic.prices[0].price;
  const arrayprice = comic.prices[0].price.toFixed(2).split(".");

  return (
    <div key={comic.id} className="bg-zinc-900 rounded-lg shadow-md flex">
      <div className="w-3/12 flex-shrink-0">
        <Image
          className="rounded-lg object-fill"
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
          width={248}
          height={248}
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-2xl text-zinc-200 font-semibold mb-2">
          {comic.title}
        </h3>
        <p className="text-zinc-300 mb-4">
          {truncatedDescription}
          {description.length > maxChars && (
            <button
              className="text-zinc-300 underline pl-1"
              onClick={toggleTruncate}
            >
              {isTruncated ? "Ver mais" : "Ver menos"}
            </button>
          )}
        </p>
        {price === 0 ? (
          <p className="text-2xl text-zinc-300">GRÁTIS</p>
        ) : (
          <p className="text-zinc-300">
            {`R$:`}
            <span className="text-zinc-300 text-2xl">{arrayprice[0]}</span>
            {"," + arrayprice[1]}
          </p>
        )}
        <button className="flex-end rounded-md text-zinc-200 bg-red-800 p-2 hover:text-zinc-950">
          🛒 Add to cart
        </button>
      </div>
    </div>
  );
}
