import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="m-1 bg-slate-700 text-white p-10">
      <div className="grid grid-cols-3">
        <div className="text-left mx-16 ">
          <h1 className="text-2xl font-semibold mt-4">Motor-Bike WareHouse</h1>
          <hr />
          <h3 className="text-xl font-semibold my-3">Created by </h3>
          <ul>
            <li className="font-semibold text-lg">Abdur Rahman Argon</li>
            <li>.Full-Stack Web-developer</li>
            <li>.Phone: 0254815</li>
            <li>.Website: www.developer.com </li>
          </ul>
        </div>
        <div className="text-left ml-20 my-14">
          <h1 className="text-xl font-semibold mt-3">Items List :</h1>
          <hr className="w-24" />

          <ul className="my-3">
            <li>
              <Link className="font-semibold text-green-500" to="/inventorise">
                Inventories
              </Link>
            </li>
            <li>
              <Link
                className=" font-semibold text-green-500"
                to="/manageinventorise"
              >
                Manage Inventory
              </Link>
            </li>
            <li>
              <Link className=" font-semibold text-green-500" to="/addnewitem">
                Add New Item
              </Link>
            </li>
            <li>
              <Link className=" font-semibold text-green-500" to="/myitems">
                My Added Items
              </Link>
            </li>
            <li>
              <Link className=" font-semibold text-green-500" to="/blog">
                my Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className="text-left mx-16 my-14">
          <h1 className="text-xl font-semibold mt-3">Contact Us :</h1>
          <hr className="w-28" />

          <ul className="flex my-6">
            <li>Email</li>
            <li>Fcbook</li>
            <li>Phone</li>
            <li>Web</li>
          </ul>

          <form>
            <input
              className="px-4 py-2 rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
            />
            <br />
            <input
              className="border-2 m-2 px-4 py-1 bg-green-700 rounded-md"
              type="submit"
              value="Subscribe"
            />
          </form>
        </div>
      </div>
      <div>
        <p>&copy; All Right reserve by Abdur Rahman Argon</p>
      </div>
    </footer>
  );
};

export default Footer;
