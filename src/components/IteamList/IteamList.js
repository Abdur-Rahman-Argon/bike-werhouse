import React from "react";

const IteamList = (props) => {
  const user = props.user;
  return (
    <tr className="border-2">
      <td className="border-2">{user.serial}</td>
      <td className="border-2">
        <img src={user.img} className="w-14" />
      </td>
      <td className="border-2 px-3">{user.productName}</td>
      <td className="border-2 px-3">{user.description}</td>
      <td className="border-2 px-3">{user.price}</td>
      <td className="border-2 px-3">{user.supplierName}</td>
      <td className="border-2 px-3">{user.stock}</td>
      <td className="border-2 px-3">
        <button className="border-2 px-2 bg-orange-600 rounded-full">
          Stock Update
        </button>
      </td>
    </tr>
  );
};

export default IteamList;
