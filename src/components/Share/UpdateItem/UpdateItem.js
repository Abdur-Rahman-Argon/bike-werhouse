import React from "react";
import { Link } from "react-router-dom";

const UpdateItem = () => {
  return (
    <div>
      <h1>update items</h1>
      <div className="pb-10">
        <Link
          to="/manageinventorise"
          className="border-2 bg-lime-800 text-white py-4 px-16 mt-10"
        >
          Go Manege Your Inventorise &#8594;
        </Link>
      </div>
    </div>
  );
};

export default UpdateItem;
