import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UpdateItem = () => {
  const { itemId } = useParams();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/productItem/${itemId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const {
    _id,
    img,
    productName,
    description,
    supplierName,
    stock,
    price,
    delivery,
  } = product;

  const updatePrice = (event) => {
    event.preventDefault();
    const newPrice = parseInt(event.target.price.value);
    const priceN = parseInt(price);
    console.log(priceN + newPrice);
  };
  const updateStock = (event) => {
    event.preventDefault();
    const newStock = parseInt(event.target.stock.value);
    const stockN = parseInt(stock);
    console.log(newStock + stockN);
  };
  const handleDelevered = () => {
    const stockN = parseInt(stock) - 1;

    const deliveryN = parseInt(delivery) + 1;

    console.log(stockN, deliveryN);
  };

  return (
    <div>
      <div>
        <h1>update items</h1>
      </div>
      <div className="  my-8 w-8/12 mx-auto grid grid-cols-2  bg-white shadow-2xl rounded-md ">
        <div className="border-0">
          <img src={img} className="w-90" />
        </div>
        <div className="border-0  p-12 text-left ">
          <h1 className="text-3xl my-2 ">{productName}</h1>
          <div className="my-5">
            <h2>
              <span className="text-md font-medium text-sky-700 mr-10">
                Supplyer:
              </span>
              <span>{supplierName}</span>
            </h2>
          </div>
          <hr />
          <div className="my-5">
            <h2>
              <span className="text-md font-medium text-sky-700 mr-16">
                Price:
              </span>
              <span> ${price}</span>
            </h2>
            <form onSubmit={updatePrice}>
              <label
                className="text-md font-medium text-sky-700 mr-3"
                htmlFor="price"
              >
                Update Price:
              </label>
              <input
                className="w-20 border-2 mx-2"
                type="number"
                name="price"
                id="price"
              />
              <input
                type="submit"
                className=" border-2 bg-emerald-400 px-3 rounded-md py-2"
                value="Upgrade"
              />
            </form>
          </div>
          <hr />
          <div className="my-5">
            <h2 className="">
              <span className="text-md font-medium text-sky-700 mr-16">
                Stock:
              </span>
              <span className="text-2xl text-red-800">
                in stock ({stock} units)
              </span>
            </h2>
            <form onSubmit={updateStock}>
              <label
                className="text-md font-medium text-sky-700 mr-3"
                htmlFor="stock"
              >
                New Stock:
              </label>
              <input
                className="w-20 border-2 mx-2"
                type="number"
                name="stock"
                id="stock"
              />
              <input
                type="submit"
                className="border-2 bg-emerald-400 px-9 rounded-md py-2"
                value="Add"
              />
            </form>
          </div>
          <hr />
          <div className="my-2">
            <span className="text-md font-medium text-sky-700 mr-9">
              Delivered:
            </span>
            <span>{delivery}</span>
            <button
              onClick={handleDelevered}
              className=" my-5 ml-3 border-2 bg-emerald-400 px-8 rounded-md py-2"
            >
              New Delivery
            </button>
          </div>

          <hr />
          <p className="mt-4 mb-5">
            <span className="text-md font-medium text-sky-700 mr-6">
              Description:
            </span>
            {description}
          </p>
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
