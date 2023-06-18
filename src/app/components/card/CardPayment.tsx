import React, { useState } from "react";
import Image from "next/image";

export function CardPayment({
  comic,
  onRemove,
  quantity,
  onQuantityChange,
}: {
  comic: IComic;
  onRemove: () => void;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}) {
  const handleRemoveFromCart = () => {
    onRemove();
  };

  const handleIncreaseQuantity = () => {
    const comicList: any = localStorage.getItem("cart");
    let comicSaves = JSON.parse(comicList) || [];

    const hasComic = comicSaves.some(
      (comicSave: any) => comicSave.id === comic.id
    );

    if (hasComic) {
      comic.quantity += 1;
      onQuantityChange(comic.quantity);
    }
    
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      const comicList: any = localStorage.getItem("cart");
      let comicSaves = JSON.parse(comicList) || [];
  
      const hasComic = comicSaves.some(
        (comicSave: any) => comicSave.id === comic.id
      );
  
      if (hasComic) {
        comic.quantity -= 1;
        onQuantityChange(comic.quantity);
      }
    }
  };

  const price = comic.prices[0].price;
  const totalPrice = price * comic.quantity;
  const formattedTotalPrice = totalPrice.toFixed(2);

  return (
    <div key={comic.id} className="bg-zinc-200 rounded-lg shadow-md flex h-48 w-full my-2 ">
      <div className="">
        <Image
          className=" p-2"
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
          width={168}
          height={168}
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
              {`$${formattedTotalPrice}`}
            </p>
          )}
        </div>
        <div className="flex justify-between">
          <div className="flex items-center">
            <button
              className="w-6 h-6 rounded-full text-zinc-200 bg-zinc-800 flex justify-center items-center active:bg-red-700"
              onClick={handleDecreaseQuantity}
            >
              -
            </button>
            <p className="text-zinc-900 mx-2">{comic.quantity}</p>
            <button
              className="w-6 h-6 rounded-full text-zinc-200  bg-zinc-800 flex justify-center items-center active:bg-green-700"
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
