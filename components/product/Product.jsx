import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

function Product({ title, id, price, image, description, category }) {
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  const [hasPrime] = useState(Math.random() < 0.5);
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING) + MIN_RATING)
  );
  return (
    <div className="relative flex flex-col m-5 bg-white p-5 sm:p-10 z-30">
      <p className="absolute top-2 right-2 text-xs text-gray-400 italic">{category}</p>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-6 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <Currency quantity={price * 72} currency="INR" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className='w-12' src="/primeLogo.png" alt="" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add To Cart</button>
    </div>
  );
}

export default Product;
