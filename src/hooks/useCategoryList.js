import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";

function useCategoryList() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductCategory = async () => {
    setIsLoading(true);
    try {
      const res = await axiosInstance.get("/products/categories");
      setCategories(res.data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductCategory();
  }, []);

  return {categories, setCategories, isLoading};

}

export default useCategoryList;
