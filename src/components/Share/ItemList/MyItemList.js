import React from "react";

const MyItemList = (props) => {
  const items = props.item;
  return (
    <div>
      <div className=" w-8/12 mx-auto grid grid-cols-3 items-center bg-slate-50">
        <div>
          <img src={items.img} alt="" className="w-40" />
        </div>
        <div className="text-left">
          <h1 className="text-3xl my-1">{items.productName}</h1>

          <h2 className="my-2">
            <span className="text-md font-medium text-sky-700 mr-2">
              Price:
            </span>
            <span> ${items.price}</span>
          </h2>
          <h2 className="my-1">
            <span className="text-md font-medium text-sky-700 mr-2">
              Stock:
            </span>
            <span className="text-2xl text-red-800">({items.stock} units)</span>
          </h2>
        </div>
        <div>
          <button className="py-3 px-5 bg-emerald-600 text-white font-semibold text-2xl rounded-md">
            Remove Item
          </button>
        </div>
      </div>
      <hr className="w-8/12 mx-auto" />
    </div>
  );
};

export default MyItemList;
