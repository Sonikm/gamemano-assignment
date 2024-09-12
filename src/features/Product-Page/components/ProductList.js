"use client";
import ProductCard from "@/components/ProductCard";
import { useSearch } from "@/context/SearchContext";
import useProducts from "@/hooks/useProducts";
import SortByTime from "./SortByTime";
import Link from "next/link";
import { useState } from "react";

const ProductList = ({ isShowAllProducts }) => {
  const { products, isLoading } = useProducts();
  const { searchQuery } = useSearch();
  const [selectedOption, setSelectedOption] = useState("");

  const filteredProducts = products.filter((product) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      product?.title?.toLowerCase().includes(lowerCaseQuery) ||
      product?.brand?.toLowerCase().includes(lowerCaseQuery) ||
      product?.category?.toLowerCase().includes(lowerCaseQuery) ||
      product?.availabilityStatus?.toLowerCase().includes(lowerCaseQuery) ||
      product?.sku?.toLowerCase().includes(lowerCaseQuery)
    );
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (selectedOption === "Release date: Old to New") {
      return new Date(a.meta.createdAt) - new Date(b.meta.createdAt);
    } else if (selectedOption === "Release date: New to Old") {
      return new Date(b.meta.createdAt) - new Date(a.meta.createdAt);
    } else if (selectedOption === "Price: Low to High") {
      return a.price - b.price;
    } else if (selectedOption === "Price: High to Low") {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  if (isLoading || !products) return <h2 className="h-full text-center text-primary text-lg">Loading...</h2>;

  return (
    <>
      <div className="flex justify-between items-start">
        {searchQuery != "" && (
          <div className="">
            <h4 className="text-lg mb-2 whitespace-nowrap">
              Search results for {searchQuery}
            </h4>
            <span className="text-sm text-gray-400 font-normal">
              {filteredProducts.length} results found
            </span>
          </div>
        )}
        <div className="flex justify-end items-end w-full ">
          <SortByTime
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-y-8 gap-4 my-10 overflow-x-scroll scrollbar-hide ">
        {sortedProducts.map((product, i) => (
          <Link
            href={`/game-store/${product.id}`}
            prefetch={true}
            key={product.id}
          >
            {isShowAllProducts ? (
              <ProductCard product={product} />
            ) : (
              i < 9 && <ProductCard product={product} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductList;
