import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IteamList from "../IteamList/IteamList";
import useProducts from "../utilites/useProducts";

const Inventories = () => {
  const [products, setProduct] = useProducts([]);

  return (
    <div className="my-5">
      <div>
        <h1 className="m-0 text-3xl font-semibold text-lime-700 underline">
          See All Items:
        </h1>
      </div>
      <div className="border-2 my-10 w-10/12 mx-auto">
        <table className="">
          <thead className=" bg-green-100">
            <tr>
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
              <IteamList key={item._id} item={item}></IteamList>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pb-10">
        <Link
          to="/manageinventorise"
          className="border-2 bg-lime-800 text-white py-4 px-16 mt-10"
        >
          Go Manege Your Inventorise &#8594;
        </Link>
      </div>
    </div>
  );
};

export default Inventories;
