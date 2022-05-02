import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
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
        {user ? (
          <button
            onClick={handleLogOut}
            className="mx-4 font-semibold text-green-500"
          >
            LogOut
          </button>
        ) : (
          <Link className="mx-4 font-semibold text-green-500" to="/login">
            Log in
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Headers;
