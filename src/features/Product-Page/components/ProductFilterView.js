import Image from "next/image";
import FilterProductSidedebar from "./FilterProductSidedebar";
import ProductList from "./ProductList";
import { useState } from "react";

const ProductFilterView = () => {
  const [isShowAllProducts, setIsShowAllProducts] = useState(false);
  const [toggleFilterSidebar, setToggleFilterSidebar] = useState(false);

  function handleToggleFilterSidebarMenu() {
    setToggleFilterSidebar(!toggleFilterSidebar);
  }

  return (
    <div className="flex gap-6 items-start relative ">
      <div className={`md:block  absolute left-0  md:relative z-[120] mt-14 md:mt-0  ${toggleFilterSidebar ? "block" : "hidden"}`}>
        <FilterProductSidedebar setToggleFilterSidebar={setToggleFilterSidebar} />
      </div>
      <Image src={"/filter-category.png"} width={35} height={35} onClick={handleToggleFilterSidebarMenu} alt="" className="md:hidden cursor-pointer"/>
      <div className="w-full ">
        <ProductList isShowAllProducts={isShowAllProducts}  />
        {/* <div className="flex justify-between  pb-4  md:justify-between md:flex-row flex-col items-start">
          <p className="lg:text-2xl md:text-xl text-sm">Checkout games similar to “Valorant”</p>
          <div className="flex items-center gap-2">
            <span
              className="hover:text-orange-400 cursor-pointer lg:text-sm text-xs"
              onClick={() => setIsShowAllProducts(!isShowAllProducts)}
            >
              {isShowAllProducts ? " SHOW LESS " : " VIEW ALL "}
            </span>
            <Image src={"arrow-right.svg"} alt="" width={20} height={10} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ProductFilterView;
