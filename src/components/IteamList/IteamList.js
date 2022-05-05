import React from "react";
import { useNavigate } from "react-router-dom";

const IteamList = (props) => {
  const {
    _id,
    img,
    serial,
    productName,
    description,
    supplierName,
    stock,
    price,
  } = props.item;

  const navigate = useNavigate();

  const handleNavihate = (id) => {
    navigate(`/inventorise/${id}`);
  };

  return (
    <tr className="border-2">
      <td className="border-2">{serial}</td>
      <td className="border-2">
        <img src={img} className="w-14" />
      </td>
      <td className="border-2 px-3">{productName}</td>
      <td className="border-2 px-3">{description}</td>
      <td className="border-2 px-3">${price}</td>
      <td className="border-2 px-3">{supplierName}</td>
      <td className="border-2 px-3">{stock}</td>
      <td className="border-2 px-3">
        <button
          onClick={() => handleNavihate(_id)}
          className="border-2 px-2 bg-green-400 rounded-full"
        >
          Update
        </button>
      </td>
    </tr>
  );
};

export default IteamList;
