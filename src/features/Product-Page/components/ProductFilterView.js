import Image from "next/image";
import FilterProductSidedebar from "./FilterProductSidedebar";
import ProductList from "./ProductList";
import { useState } from "react";

const ProductFilterView = () => {
  const [isShowAllProducts , setIsShowAllProducts] = useState(false);

  return (
    <div className="flex gap-6 items-start">
      <FilterProductSidedebar />
      <div className="w-full ">
        <ProductList isShowAllProducts={isShowAllProducts} />
        <div className="flex justify-between items-center pb-4">
          <p className="text-2xl">Checkout games similar to “Valorant”</p>
          <div className="flex items-center gap-2">
            <span className="hover:text-orange-400 cursor-pointer" onClick={() => setIsShowAllProducts(!isShowAllProducts)}>
            {isShowAllProducts ? " SHOW LESS " : " VIEW ALL "}
            </span>
            <Image src={"arrow-right.svg"} alt="" width={20} height={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFilterView;
