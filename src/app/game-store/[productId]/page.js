"use client";
import ProductDetails from "@/features/product-details/ProductDetails";

const ProductDetailsPage = ({ params }) => {
  // params object cantain routes parameters as kay value pairs
  console.log(params);
  return (
    <div className=" overflow-hidden h-screen ">
      <ProductDetails />
    </div>
  );
};

export default ProductDetails;
