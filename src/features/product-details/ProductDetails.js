import useProductDetails from "@/hooks/useProductDetails";
import Image from "next/image";

const ProductDetails = ({params}) => {
  const { productDetail, isLoading } = useProductDetails(params.productId);

  if (isLoading || !productDetail) return <h2>Loading...</h2>;

  const {
    thumbnail,
    title,
    description,
    category,
    price,
    rating,
    stock,
    discountPercentage,
    brand,
    tags,
    warrantyInformation,
    availabilityStatus,
    shippingInformation,
    reviews,
    returnPolicy,
    minimumOrderQuantity,
  } = productDetail;

  // console.log(params.productId)

  return (
    <div className="flex md:justify-evenly flex-col md:flex-row h-screen md:overflow-hidden text-white p-6  mx-auto rounded-lg shadow-lg mt-24">
      {/* Product Image */}
      <div className="flex justify-center mx-auto items-center mt-16 bg-[#FEF3BC] h-[400px] md:basis-[40%] rounded-2xl sm:min-w-[400px] max-w-full" >
        <Image
          className="h-auto"
          src={thumbnail}
          alt={title}
          width={300}
          height={300}
        />
      </div>

      {/* Product Details */}
      <div className="md:basis-[40%] md:overflow-y-scroll scrollbar-hide p-6">
        <h1 className="md:text-3xl text-2xl font-bold text-gray-100 mt-4">{title}</h1>
        <p className="text-gray-400 text-sm mb-4">{category} • {brand}</p>

        {/* Pricing and Discount */}
        <div className="flex justify-between items-center mt-4 mb-2">
          <div className="flex items-center gap-2">
            <span className="md:text-2xl text-base font-semibold text-green-400">
              ${price}
            </span>
            <span className="md:text-sm text-xs  text-gray-500 line-through">
              ${(price + (discountPercentage / 100) * price).toFixed(2)}
            </span>
            <span className="md:text-sm text-xs  text-red-400">
              {discountPercentage}% Off
            </span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-400 text-lg">★</span>
            <span className="md:text-sm text-xs font-semibold text-gray-300">
              {rating}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-6 md:text-base text-sm line-clamp-5">{description}</p>

        {/* Stock and Availability */}
        <div className="flex justify-between items-center mb-4">
          <span
            className={`text-sm font-semibold ${
              stock > 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {stock > 0 ? `In Stock (${stock})` : "Out of Stock"}
          </span>
          <span className="text-sm font-semibold text-gray-500">
            {availabilityStatus}
          </span>
        </div>

        {/* Tags */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-200">Tags:</h3>
          <div className="flex gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-700 rounded-full text-sm text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Warranty Information */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-200">
            Warranty:
          </h3>
          <p className="text-sm text-gray-400">{warrantyInformation}</p>
        </div>

        {/* Shipping Information */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-200">
            Shipping Information:
          </h3>
          <p className="text-sm text-gray-400">{shippingInformation}</p>
        </div>

        {/* Return Policy */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-200">
            Return Policy:
          </h3>
          <p className="text-sm text-gray-400">{returnPolicy}</p>
        </div>

        {/* Minimum Order Quantity */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 text-gray-200">
            Minimum Order Quantity:
          </h3>
          <p className="text-sm text-gray-400">{minimumOrderQuantity}</p>
        </div>

        {/* Reviews Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-200">
            Customer Reviews:
          </h3>
          {reviews.length > 0 ? (
            reviews.map((review, index) => (
              <div key={index} className="mb-4 border-b border-gray-700 pb-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">
                    {review.reviewerName}
                  </span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 text-lg">★</span>
                    <span className="text-lg font-semibold text-gray-300">
                      {review.rating}
                    </span>
                  </div>
                </div>
                <p className="text-gray-400 mt-2">{review.comment}</p>
                <span className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
