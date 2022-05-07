import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateItem = () => {
  const { itemId } = useParams();
  const [newstock, setNewStock] = useState();
  const [newDelivery, setNewDelivery] = useState();

  //Load single Item
  const [item, setItem] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/productItem/${itemId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setNewStock(data.stock);
        setNewDelivery(data.delivery);
      });
  }, []);

  // destractureing item property
  const {
    _id,
    img,
    productName,
    description,
    supplierName,
    stock,
    price,
    delivery,
  } = item;

  const updateUrl = `http://localhost:5000/productItem/${_id}`;
  // update stack
  const updateStock = (event) => {
    event.preventDefault();
    setNewStock(stock);
    const newStock = parseInt(event.target.stock.value);
    const stockN = parseInt(stock);
    const updateStock = newStock + stockN;
    setNewStock(updateStock);
    const updateItem = { stock: newstock, delivery: newDelivery };

    fetch(updateUrl, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItem),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if ((result.acknowledged = true)) {
          toast.success("Stock Update Successful !");
        }
        event.target.reset();
      });
  };

  const handleDelevered = () => {
    const stockN = parseInt(newstock) - 1;
    setNewStock(stockN);
    const deliveryN = parseInt(newDelivery) + 1;
    setNewDelivery(deliveryN);
    const updateItem = { stock: newstock, delivery: newDelivery };

    fetch(updateUrl, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateItem),
    })
      .then((res) => res.json())
      .then((result) => {
        if ((result.acknowledged = true)) {
          toast.success("Delivary And Stock Update Successful !");
        }
      });
  };

  return (
    <div className=" p-5 my-16 w-9/12 mx-auto bg-white shadow-2xl rounded-md">
      <div>
        <h1 className="text-3xl font-bold p-3">Product Item Update</h1>
      </div>
      <div className=" grid grid-cols-2">
        <div className="border-0 py-16">
          <img src={img} className="w-90 mx-auto" />
          <h1 className="text-sm text-center mt-6">
            <b> Image Title: </b>
            <b> {productName}</b>
          </h1>
        </div>
        <div className="border-0  p-12 text-left ">
          <h1 className="text-3xl font-bold my-2 ">{productName}</h1>
          <div className="my-5">
            <h2>
              <span className="text-md font-medium text-sky-700 mr-10">
                item Id:
              </span>
              <span>{_id}</span>
            </h2>
          </div>
          <hr />
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
          </div>
          <hr />
          <div className="my-5">
            <h2 className="my-3">
              <span className="text-md font-medium text-sky-700 mr-16">
                Stock:
              </span>
              <span className="text-2xl text-red-800">
                in stock ({newstock} units)
              </span>
            </h2>
            <hr />
            <form
              onSubmit={updateStock}
              className="my-3 flex items-center justify-between"
            >
              <label
                className="text-md font-medium text-sky-700 mr-3"
                htmlFor="stock"
              >
                New Stock:
              </label>
              <input
                className="w-20 border-2 px-2 mx-2"
                type="number"
                name="stock"
                id="stock"
                placeholder="Stock"
              />
              <input
                type="submit"
                className="border-2 bg-emerald-400 px-9 rounded-md py-2"
                value="Add"
              />
            </form>
          </div>
          <hr />
          <div className="my-2 flex items-center justify-between">
            <h2 className="my-3">
              <span className="text-md font-medium text-sky-700 mr-16">
                Sold :
              </span>
              <span className="text-2xl text-red-800">{newDelivery}</span>
            </h2>

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
          Go Manege Inventorise &#8594;
        </Link>
      </div>
    </div>
  );
};

export default UpdateItem;
