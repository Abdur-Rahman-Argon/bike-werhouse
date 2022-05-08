import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://afternoon-beach-43347.herokuapp.com/productItems")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [products]);
  return [products, setProduct];
};

export default useProducts;
