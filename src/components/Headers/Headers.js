import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "../Share/CustomLink/CustomLink";
import "./Headers.css";

const Headers = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);

  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <nav className="container flex justify-between mx-auto py-5">
      <div>
        <Link className="mx-4 font-semibold text-green-500 text-xl" to="/">
          WareHouse
        </Link>
      </div>
      <div className="flex justify-around">
        <CustomLink className="mx-4 font-semibold text-green-500" to="/">
          Home
        </CustomLink>

        <CustomLink
          className="mx-4 font-semibold text-green-500"
          to="/inventorise"
        >
          Inventories
        </CustomLink>

        {user && (
          <>
            <CustomLink
              className="mx-4 font-semibold text-green-500"
              to="/manageinventorise"
            >
              Manage Inventory
            </CustomLink>

            <CustomLink
              className="mx-4 font-semibold text-green-500"
              to="/addnewitem"
            >
              Add New Item
            </CustomLink>

            <CustomLink
              className="mx-4 font-semibold text-green-500"
              to="/myitems"
            >
              My Items
            </CustomLink>
          </>
        )}

        <CustomLink className="mx-4 font-semibold text-green-500" to="/blog">
          Blog
        </CustomLink>

        <CustomLink className="mx-4 font-semibold text-green-500" to="/about">
          About
        </CustomLink>

        {user ? (
          <button
            onClick={handleLogOut}
            className="mx-4 font-semibold text-green-500"
          >
            LogOut
          </button>
        ) : (
          <CustomLink className="mx-4 font-semibold text-green-500" to="/login">
            Log in
          </CustomLink>
        )}
      </div>
    </nav>
  );
};

export default Headers;
