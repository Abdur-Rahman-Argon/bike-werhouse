import React, { useEffect, useState } from "react";
import "./Home.css";
import Banners from "../Banners/Banners";
import IteamList from "../../components/IteamList/IteamList";
import "./Home.css";
import useProducts from "../../components/utilites/useProducts";

const Home = () => {
  const [products, setProduct] = useProducts([]);
  const items = products.slice(1, 4);
  console.log(items);

  return (
    <div>
      <Banners></Banners>
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
            {items.map((item) => (
              <IteamList item={item}></IteamList>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
