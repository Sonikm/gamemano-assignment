"use client";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }) => {
  const {
    title,
    description,
    price,
    rating,
    stock,
    availabilityStatus,
    discountPercentage,
    images,
  } = product;

  return (
    <div className="bg-[#FEF3BC] rounded-lg hover:scale-[1.02] duration-200 transition  shadow-lg p-4 max-w-xs flex flex-col  min-w-[200px]  cursor-pointer">
      <div className="flex justify-center items-center mb-2">
        <Image
          className="rounded-md object-contain  w-full h-[140px] md:h-[160px]  "
          src={`${images[0]}`}
          alt={title}
          width={160}
          height={100}
        />
      </div>

      <h2 className="text-lg font-bold text-gray-900 line-clamp-2 ">{title}</h2>
      <p className="text-gray-700 text-sm mt-1 mb-2 line-clamp-3">{description}</p>

      <div className="flex items-center justify-between mt-4">
        <p className="text-xl font-semibold text-green-600">${price}</p>
        <span className="text-sm text-red-500">{discountPercentage}% Off</span>
      </div>

      <div className="flex items-center mt-2">
        <span className="text-yellow-400">★ {rating}</span>
        <span className="text-gray-400 ml-1">({stock} in stock)</span>
      </div>

      <p className="text-sm mt-2 text-gray-600">Status: {availabilityStatus}</p>

      <button className="bg-primary text-white py-2 mt-4 rounded hover:bg-orange-500 transition">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
