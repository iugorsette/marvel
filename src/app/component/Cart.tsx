import React, { useEffect, useState } from "react";
import { CardPayment } from "./card/CardPayment";
import { toast } from "react-toastify";

export function Cart() {
  const [comics, setComics] = useState([]);

  const totalItems = comics.length;

  const calculateTotalValue = () => {
    let quantity = 1;
    let total = 0;
    comics.forEach((comic) => {
        total += comic.prices[0].price * quantity;
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
    let cartComicList = comics.filter((item) => {
      return item.id !== id;
    });

    setComics(cartComicList);
    localStorage.setItem("cart", JSON.stringify(cartComicList));
    toast.success("Comic was removed to cart!");
  };

  useEffect(() => {
    const comicList = localStorage.getItem("cart");
    setComics(JSON.parse(comicList) || []);
  }, []);

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
                return (
                  <CardPayment
                    key={comic.id}
                    comic={comic}
                    quantity={comic.quantity}
                    onQuantityChange={(quantity: number) =>
                      handleQuantityChange(comic.id, quantity)
                    }
                    onRemove={() => handleRemoveComic(comic.id)}
                  />
                );
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
