"use client";
import ProductCard from "@/components/ProductCard";
import useProducts from "@/hooks/useProducts";
import Link from "next/link";

const TrendingProductList = () => {
  const { products, isLoading } = useProducts();

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
      {products.map((product, i) => (
        <Link
          href={`/game-store/${product.id}`}
          key={product.id}
          className="min-w-[300px]"
        >
          {i < 8 && <ProductCard product={product} />}
        </Link>
      ))}
    </div>
  );
};

export default TrendingProductList;
