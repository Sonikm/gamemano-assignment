import { useCategory } from "@/context/CategoryContext";

const { default: axiosInstance } = require("@/utils/axiosInstance");
const { useState, useEffect } = require("react");

const useProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const { selectedCategory } = useCategory();


  // Fetch all products
  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      if (selectedCategory == undefined || selectedCategory == null) {
        const response = await axiosInstance.get("/products");
        setProducts(response.data.products);
      } else {
        const response = await axiosInstance.get(
          `/products/category/${selectedCategory}`
        );
        setProducts(response.data.products);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  return { products, isLoading };
};

export default useProducts;
