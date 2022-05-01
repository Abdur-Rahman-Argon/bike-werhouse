import React from "react";
import { Link } from "react-router-dom";
import "./Headers.css";

const Headers = () => {
  return (
    <div>
      <h1>this is headers</h1>
      <Link to="/"> Home</Link>
      <Link to="/"> evebt</Link>
      <Link to="/"> Home</Link>
      <Link to="/"> Home</Link>
      <Link to="/"> Blog</Link>
      <Link to="/"> About</Link>
      <Link to="/"> Log in</Link>
    </div>
  );
};

export default Headers;
