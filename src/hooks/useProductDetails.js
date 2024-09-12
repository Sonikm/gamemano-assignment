import axiosInstance from "@/utils/axiosInstance";
import { useEffect, useState } from "react";

function useProductDetails(id) {
  const [productDetail, setProductDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProductDetail = async () => {
    setIsLoading(true);
    try {
      const res = await axiosInstance.get(`/products/${id}`);
      setProductDetail(res.data);
    } catch (error) {
        console.log(error.message)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  },[id]);

  return { isLoading, productDetail, setProductDetail };
}

export default useProductDetails;
