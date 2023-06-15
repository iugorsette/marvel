import React, { useState } from "react";
import Image from "next/image";

export function CardPayment({
  comic,
  onRemove,
}: {
  comic: IComic;
  onRemove: () => void;
}) {
  const [cart, setCart] = useState(new Map<number, number>());
  const [quantity, setQuantity] = useState(1);

  const handleRemoveFromCart = () => {
    const updatedCart = new Map(cart);
    updatedCart.delete(comic.id);

    localStorage.setItem("cart", JSON.stringify(Array.from(updatedCart)));
    setCart(updatedCart);
    onRemove();
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const price = comic.prices[0].price;
  const totalPrice = price * quantity;
  const formattedTotalPrice = totalPrice.toFixed(2);

  return (
    <div key={comic.id} className="bg-zinc-200 rounded-lg shadow-md flex h-48 w-full my-2 ">
      <div className="">
        <Image
          className="rounded-l-md object-fill"
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
          width={120}
          height={120}
        />
      </div>
      <div className="flex flex-col justify-between px-4 py-2 w-full">
        <div>
          <h3 className="text-lg text-gray-900 font-semibold mb-2">
            {comic.title}
          </h3>
          {price === 0 ? (
            <p className="text-lg text-gray-900 flex justify-end ">GRÁTIS</p>
          ) : (
            <p className="text-2xl font-semibold text-gray-900 flex justify-end">
              {`$:${formattedTotalPrice}`}
            </p>
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <button
              className="w-8 h-8 rounded-full text-gray-900 bg-gray-200 flex justify-center items-center"
              onClick={handleDecreaseQuantity}
            >
              -
            </button>
            <p className="text-gray-900 mx-2">{quantity}</p>
            <button
              className="w-8 h-8 rounded-full text-gray-900 bg-gray-200 flex justify-center items-center"
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
          </div>
          <div>
            <button
              className="w-36 rounded-md text-white bg-red-800 p-2 hover:bg-red-900"
              onClick={handleRemoveFromCart}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
