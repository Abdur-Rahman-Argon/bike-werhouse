import React, { useEffect, useState } from "react";
import IteamList from "../IteamList/IteamList";
import useProducts from "../utilites/useProducts";

const Inventories = () => {
  const [products, setProduct] = useProducts([]);

  return (
    <div>
      <div className="border-2 my-5 w-10/12 mx-auto">
        <table className="">
          <thead>
            <tr>
              <td className="border-2 px-3 font-semibold text-lg">Si</td>
              <td className="border-2 px-3 font-semibold text-lg">Image</td>
              <td className="border-2 px-3 font-semibold text-lg">
                Product Name
              </td>
              <td className="border-2 px-3 font-semibold text-lg">
                Description
              </td>
              <td className="border-2 px-3 font-semibold text-lg">Price</td>
              <td className="border-2 px-3 font-semibold text-lg">
                supplier Name
              </td>
              <td className="border-2 px-3 font-semibold text-lg">Stock</td>
              <td className="border-2 px-3 font-semibold text-lg">Update</td>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <IteamList item={item}></IteamList>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Inventories;
