import React from "react";

const CustomiseInventory = (props) => {
  const item = props.item;
  return (
    <tr className="border-2">
      <td className="border-2">{item.serial}</td>
      <td className="border-2">
        <img src={item.img} className="w-14" />
      </td>
      <td className="border-2 px-3">{item.productName}</td>

      <td className="border-2 px-3">{item.price}</td>
      <td className="border-2 px-3">{item.supplierName}</td>
      <td className="border-2 px-3">{item.stock}</td>
      <td className="border-2 px-3">
        <button
          to="/inventorise/:id"
          className="border-2 px-2 bg-green-400 rounded-full"
        >
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CustomiseInventory;
