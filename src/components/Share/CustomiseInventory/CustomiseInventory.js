import React from "react";

const CustomiseInventory = ({ item, removeItem }) => {
  const { _id, productName, price, img, supplierName, stock } = item;

  return (
    <tr className="border-2">
      <td className="border-2">
        <img src={img} className="w-14" />
      </td>
      <td className="border-2 px-3">{productName}</td>

      <td className="border-2 px-3">${price}</td>
      <td className="border-2 px-3">{supplierName}</td>
      <td className="border-2 px-3">{stock}</td>
      <td className="border-2 px-3">
        <button
          onClick={() => removeItem(_id)}
          className="border-2 px-2 bg-green-400 rounded-full"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CustomiseInventory;
