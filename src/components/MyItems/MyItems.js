import React from "react";
import MyItemList from "../Share/ItemList/MyItemList";
import useProducts from "../utilites/useProducts";

const MyItems = () => {
  const [products, setProduct] = useProducts([]);
  const items = products.slice(1, 4);
  return (
    <div>
      <h1>my added Products</h1>
      <div>
        {items.map((item) => (
          <MyItemList item={item}></MyItemList>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
