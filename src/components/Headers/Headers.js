import React from "react";
import { Link } from "react-router-dom";
import "./Headers.css";

const Headers = () => {
  return (
    <nav className="container flex justify-between mx-auto py-5">
      <div>
        <Link className="mx-4 font-semibold text-green-500 text-xl" to="/">
          WareHouse
        </Link>
      </div>
      <div className="flex justify-around">
        <Link className="mx-4 font-semibold text-green-500" to="/">
          {" "}
          Home
        </Link>
        <Link className="mx-4 font-semibold text-green-500" to="/">
          {" "}
          evebt
        </Link>
        <Link className="mx-4 font-semibold text-green-500" to="/">
          {" "}
          Home
        </Link>
        <Link className="mx-4 font-semibold text-green-500" to="/">
          {" "}
          Home
        </Link>
        <Link className="mx-4 font-semibold text-green-500" to="/">
          {" "}
          Blog
        </Link>
        <Link className="mx-4 font-semibold text-green-500" to="/">
          {" "}
          About
        </Link>
        <Link className="mx-4 font-semibold text-green-500" to="/login">
          Log in
        </Link>
      </div>
    </nav>
  );
};

export default Headers;
