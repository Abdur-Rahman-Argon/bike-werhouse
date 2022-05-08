import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import CustomLink from "../Share/CustomLink/CustomLink";
import Spiners from "../Share/Spiners/Spiners";
import "./Headers.css";

const Headers = () => {
  const [open, setOpen] = useState(false);
  function menu() {
    setOpen(!open);
  }

  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Spiners />;
  }

  const handleLogOut = () => {
    signOut(auth);
  };
  return (
    <nav className="bg-white border-b-2 border-gray-200 px-2 sm:px-4 py-3 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link className="mx-4 font-semibold text-green-500 text-xl" to="/">
          Motor-Bike WareHouse
        </Link>
        {open ? (
          <button
            onClick={menu}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        ) : (
          <button
            onClick={menu}
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        )}
        <div
          className={`w-full  md:block md:w-auto ${
            open ? "absulate top-20 visible " : "hidden  top-[-120px]"
          } `}
          id="mobile-menu"
        >
          <ul
            className={`flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium `}
          >
            <li>
              <CustomLink className=" font-semibold text-green-500" to="/">
                Home
              </CustomLink>
            </li>
            <li>
              <CustomLink
                className=" font-semibold text-green-500"
                to="/inventorise"
              >
                Inventories
              </CustomLink>
            </li>
            {user && (
              <>
                <li>
                  <CustomLink
                    className=" font-semibold text-green-500"
                    to="/manageinventorise"
                  >
                    Manage Inventory
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className=" font-semibold text-green-500"
                    to="/addnewitem"
                  >
                    Add New Item
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    className=" font-semibold text-green-500"
                    to="/myitems"
                  >
                    My Items
                  </CustomLink>
                </li>
              </>
            )}

            <li>
              <CustomLink className=" font-semibold text-green-500" to="/blog">
                Blog
              </CustomLink>
            </li>
            <li>
              <CustomLink className="font-semibold text-green-500" to="/about">
                About
              </CustomLink>
            </li>
            {user ? (
              <li>
                <button
                  onClick={handleLogOut}
                  className="  font-semibold text-green-500"
                >
                  LogOut
                </button>
              </li>
            ) : (
              <li>
                <CustomLink
                  className="  font-semibold text-green-500"
                  to="/login"
                >
                  Log in
                </CustomLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Headers;
