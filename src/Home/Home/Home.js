import React, { useEffect, useState } from "react";
import "./Home.css";
import Banners from "../Banners/Banners";
import IteamList from "../../components/IteamList/IteamList";
import "./Home.css";
import useProducts from "../../components/utilites/useProducts";
import Footer from "../Footer/Footer";
import Delivery from "../Delivery/Delivery";
import DeliveryProsess from "./DeliveryProsess/DeliveryProsess";
import Newproduct from "./Newproduct/Newproduct";

const Home = () => {
  const [products] = useProducts([]);

  const items = products.slice(1, 7);

  return (
    <div>
      <Banners></Banners>
      <div className="my-6 w-10/12">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-900 w-40 mx-auto">
          Inventories &#8594;
        </h2>
      </div>
      <div className="border-2 my-5 mx-auto">
        <table className="w-full">
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
            {items.map((item) => (
              <IteamList item={item} key={item._id}></IteamList>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container my-10 mx-auto">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-900 w-28 mx-2">
          Marketing
        </h2>
        <div className="container mx-auto">
          <Delivery></Delivery>
        </div>
      </div>
      <div className="container mx-auto my-10">
        <h2 className="text-2xl  font-semibold border-b-2 border-gray-900 w-48 mx-2 ">
          Delivery prosess
        </h2>
        <DeliveryProsess></DeliveryProsess>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Home;
