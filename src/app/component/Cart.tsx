import React, { useState } from "react";
import { useComicById } from "../services/comics";
import { CardPayment } from "./card/CardPayment";

export function Cart() {
  const comicIds = [5, 10, 15]; // IDs dos quadrinhos desejados

  const [comics, setComics] = useState(
    comicIds.map((id) => ({ id, quantity: 1 }))
  );

  const totalItems = comics.length;

  const calculateTotalValue = () => {
    let total = 0;
    comics.forEach((comic) => {
      const { id, quantity } = comic;
      const comicData = useComicById(id);

      if (comicData && comicData.prices && comicData.prices.length > 0) {
        total += comicData.prices[0].price * quantity;
      }
    });
    return total.toFixed(2);
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    setComics((prevComics) =>
      prevComics.map((comic) =>
        comic.id === id ? { ...comic, quantity } : comic
      )
    );
  };

  const handleRemoveComic = (id: number) => {
    setComics((prevComics) => prevComics.filter((comic) => comic.id !== id));
  };

  return (
    <div className="bg-zinc-800 p-4">
      <h1 className="text-center text-3xl text-red-700 font-bold mb-8">
        Cart ({totalItems} items)
      </h1>
      <div className="flex justify-center">
        <div className="bg-white rounded-lg p-4 shadow-md">
          {comics.length > 0 ? (
            <>
              {comics.map((comic) => {
                const comicData = useComicById(comic.id);

                return comicData ? (
                  <CardPayment
                    key={comic.id}
                    comic={comicData}
                    quantity={comic.quantity}
                    onQuantityChange={(quantity: number) =>
                      handleQuantityChange(comic.id, quantity)
                    }
                    onRemove={() => handleRemoveComic(comic.id)}
                  />
                ) : null;
              })}
              <p className="text-right mt-4">
                Total: R$ {calculateTotalValue()}
              </p>
              <button className="mt-4 w-full bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-900">
                Finalizar Compra
              </button>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}
