"use client";
import { useCategory } from "@/context/CategoryContext";
import { useSearch } from "@/context/SearchContext";
import useCategoryList from "@/hooks/useCategoryList";
import useProducts from "@/hooks/useProducts";
import React, { useEffect, useState } from "react";

const FilterProductSidedebar = ({setToggleFilterSidebar}) => {
  const { selectedCategory, setSelectedCategory } = useCategory();
  const { searchQuery, setSearchQuery } = useSearch();
  

  const { categories, setCategories, isLoading } = useCategoryList();

  const [priceRange, setPriceRange] = useState([40, 55]);
  const [selectedRatings, setSelectedRatings] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchQuery('');
    setToggleFilterSidebar(false)
  };

  const handleRatingChange = (rating) => {
    setSelectedRatings(rating);
  };

  const handlePriceChange = (e, index) => {
    const updatedPrice = [...priceRange];
    updatedPrice[index] = e.target.value;
    setPriceRange(updatedPrice);
    console.log(priceRange)
  };

  const applyFilters = () => {
    console.log("Applying Fiters");
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="bg-[#362F25] p-6 mt-2 rounded-lg w-[300px] shadow-lg shadow-[#201f1f]">
      {/* Categories */}

      <div>
        <h3 className="text-white font-medium mb-4">Categories</h3>
        {categories.map((category) => (
          <label
            key={category.name}
            className="flex items-center mb-3 text-white"
          >
            <input
              type="checkbox"
              name={category.name}
              onChange={() => handleCategoryChange(category.slug)}
              checked={selectedCategory == category.slug}
              className="appearance-none h-4 w-4 border border-[#5B5A57] rounded-[4px] checked:bg-orange-500 checked:border-orange-500 focus:ring-1 focus:ring-orange-300"
            />
            <span className="ml-2 font-light text-sm">{category.name}</span>
          </label>
        ))}
      </div>

      {/* Price */}

      <div className="mt-6">
        <h3 className="text-white font-medium mb-4">Price</h3>
        <div className="flex justify-between items-center">
          <input
            type="number"
            value={priceRange[0]}
            onChange={(e) => handlePriceChange(e, 0)}
            className="bg-gray-800 text-white p-1 rounded w-16"
          />
          <span className="text-white mx-2">-</span>
          <input
            type="number"
            value={priceRange[1]}
            onChange={(e) => handlePriceChange(e, 1)}
            className="bg-gray-800 text-white p-1 rounded w-16"
          />
        </div>
      </div>

      {/* Ratings */}

      <div className="mt-6">
        <h3 className="text-white  font-medium mb-4">Ratings</h3>
        {Array.from({ length: 5 }, (_, index) => (
          <label className="flex items-center gap-2" key={index}>
            <div className="flex gap-1 cursor-pointer ">
              {Array.from({ length: 5 }, (_, starIndex) => (
                <span
                  key={starIndex}
                  className={` ${
                    starIndex < 5 - index ? "text-yellow-400" : "opacity-40"
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="text-sm ml-1"> & Up</span>
            </div>
          </label>
        ))}
      </div>

      <button
        onClick={applyFilters}
        className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterProductSidedebar;
