import React from "react";
import { Link } from "react-router-dom";

const UpdateItem = () => {
  const product = {
    serial: 1,
    supplierName: "Nasim",
    productName: "watch",
    price: "1500",
    img: "https://i.ibb.co/BCNjjjN/Urine.png",
    description:
      "I am a simple person of my bpersomnalotiy this is my book of self",
    stock: "23",
    delivery: "12",
  };
  return (
    <div>
      <div>
        <h1>update items</h1>
      </div>
      <div className="border-2 my-8 w-8/12 mx-auto grid grid-cols-2 ">
        <div className="border-0  bg-gray-50">
          <img src={product.img} className="w-90" />
        </div>
        <div className="border-0 bg-gray-50 p-12 text-left ">
          <h1 className="text-3xl my-2 ml-5">{product.productName}</h1>
          <h2>
            <span className="text-md font-medium text-sky-700 mr-10">
              Supplyer:
            </span>
            <span>{product.supplierName}</span>
          </h2>
          <h2 className="my-2">
            <span className="text-md font-medium text-sky-700 mr-16">
              Price:
            </span>
            <span> {product.price}</span>
          </h2>
          <h2 className="my-3">
            <span className="text-md font-medium text-sky-700 mr-16">
              Stock:
            </span>{" "}
            <span className="text-2xl text-red-800">
              {" "}
              in stock ({product.stock} units)
            </span>
          </h2>
          <h2 className="my-2">
            <span className="text-md font-medium text-sky-700 mr-9">
              Delivered:
            </span>
            {product.delivery}
          </h2>
          <p className="mt-4 mb-5">
            <span className="text-md font-medium text-sky-700 mr-6">
              Description:
            </span>
            {product.description}
          </p>
          <hr />
          <button className=" my-5 border-2 bg-emerald-400 px-8 rounded-md py-2">
            New Delivery
          </button>
          <div>
            <label
              className="text-md font-medium text-sky-700 mr-3"
              htmlFor="quantity"
            >
              New Stock:
            </label>
            <input
              className="w-20 border-2 mx-2"
              type="number"
              name="quantity"
              id="quantity"
            />
            <button className=" my-5 border-2 bg-emerald-400 px-3 rounded-md py-2">
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="pb-10">
        <Link
          to="/manageinventorise"
          className="border-2 bg-lime-800 text-white py-4 px-16 mt-10"
        >
          Go for Manege Inventorise &#8594;
        </Link>
      </div>
    </div>
  );
};

export default UpdateItem;
