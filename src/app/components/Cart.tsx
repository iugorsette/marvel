import React, { useEffect, useState } from "react";
import { CardPayment } from "./card/CardPayment";
import { toast } from "react-toastify";

export function Cart() {
  const [comics, setComics] = useState<IComic[]>([]);
  const [quantity, setQuantity] = useState(1);

  const totalItems = comics.length;

  const calculateTotalValue = () => {
    let total = 0;
    comics.forEach((comic) => {
      let price = comic.prices[0].price;
      if (price) {
        total += price * comic.quantity;
      }
    });
    return total.toFixed(2);
  };

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setComics((prevComics) =>
      prevComics.map((comic) =>
        comic.id === id ? { ...comic, quantity: newQuantity } : comic
      )
    );
  };

  const handleRemoveComic = (id: number) => {
    let cartComicList = comics.filter((comic: IComic) => {
      return comic.id !== id;
    });

    setComics(cartComicList);
    localStorage.setItem("cart", JSON.stringify(cartComicList));
    toast.success("Comic was removed from cart!");
  };

  useEffect(() => {
    const comicList: string | null = localStorage.getItem("cart");
    if (comicList) {
      setComics(JSON.parse(comicList) || []);
    }
  }, []);

  return (
    <div className="bg-gradient-to-b from-zinc-800 to-zinc-700 p-4">
      <h1 className="text-center text-3xl text-red-700 font-bold mb-8">
        Cart ({totalItems} items)
      </h1>
      <div className="flex justify-center">
        <div className="bg-zinc-800 rounded-lg p-4 shadow-md">
          {comics.length > 0 ? (
            <>
              {comics.map((comic) => (
                <CardPayment
                  key={comic.id}
                  comic={comic}
                  quantity={comic.quantity}
                  onQuantityChange={(newQuantity: number) =>
                    handleQuantityChange(comic.id, newQuantity)
                  }
                  onRemove={() => handleRemoveComic(comic.id)}
                />
              ))}

              <p className="text-zinc-100 text-right text-2xl font-bold mt-4">
                Cart Total $:{calculateTotalValue()}
              </p>
              <button className="mt-4 w-full bg-red-800 text-zinc-100 py-2 px-4 rounded-md hover:bg-red-900">
                Checkout
              </button>
            </>
          ) : (
            <div>
              <p className="text-zinc-100 text-center text-2xl font-bold">
                No items in cart
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
