import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import googleIcon from "../../images/google.png";
import facebookIcon from "../../images/facebook.png";
import githubIcon from "../../images/github.png";
import Spiners from "./../Share/Spiners/Spiners";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogIn = () => {
  const [user] = useAuthState(auth);
  const [Error, setError] = useState();
  const [userEmail, setEmail] = useState();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const handleResetPassword = async () => {
    if (userEmail) {
      await sendPasswordResetEmail(userEmail);
      toast.success("Email send for Reset Password");
    } else {
      toast.error("Please Give Email for Reset Password");
    }
  };

  const [signInWithGoogle, GUser, GLoading] = useSignInWithGoogle(auth);

  const handleGoogleSignin = () => {
    signInWithGoogle();
  };

  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (loading || GLoading || sending) {
    return <Spiners />;
  }

  const handleSignIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    setEmail(email);
    const password = event.target.password.value;
    await signInWithEmailAndPassword(email, password);

    // const url = "http://localhost:5000/login";
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(email),
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //     console.log(result);
    //   });

    if (!error) {
      setError("Please Give Correct Email & Password!");
    } else {
      setError("");
      event.target.reset();
    }
  };

  return (
    <div className=" border-2 w-96 mx-auto rounded-xl p-8">
      <h1 className="text-2xl text-emerald-500 font-semibold">Please logIn</h1>

      <div className="flex items-center my-5">
        <div className="m-2">
          <hr className="w-20 bg-slate-400  rounded-md" />
        </div>
        <div>
          <span className="text-sm text-slate-400 ">login with Email</span>
        </div>
        <div className="m-2">
          <hr className="w-20 bg-slate-400  rounded-md" />
        </div>
      </div>

      <form onSubmit={handleSignIn} className="my-5">
        <div className="my-4 mx-8 text-left ">
          <label htmlFor="email">Email*</label>
          <br />
          <input
            className="border-2 rounded-full w-60"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="my-4 mx-8 text-left">
          <label htmlFor="password">Password*</label>
          <input
            className="border-2 rounded-full w-60"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="flex items-center my-3 mx-8">
          <input type="checkbox" name="confirm" id="confirm" />
          <span className="mx-2">Remember Me.</span>
        </div>
        <div>
          <p className="m-1 text-red-600"> {Error}</p>
        </div>
        <div className="rounded-full py-2 my-5 bg-lime-600 w-52 mx-auto ">
          <input
            className="text-white font-semibold text-xl"
            type="submit"
            value="LogIn"
          />
        </div>
      </form>
      <div className="my-5">
        <button
          onClick={handleResetPassword}
          className="text-sky-500 font-semibold"
        >
          Reset Password In Email
        </button>
      </div>
      <div>
        <p>
          Not registered yet?
          <Link className="mx-1 text-sky-500 font-semibold" to="/signup">
            Create a new account
          </Link>
        </p>
      </div>
      <div className="flex items-center my-5">
        <div className="m-2">
          <hr className="w-20 bg-slate-400  rounded-md" />
        </div>
        <div>
          <span className="text-sm text-slate-400">login with Google</span>
        </div>
        <div className="m-2">
          <hr className="w-20 bg-slate-400  rounded-md" />
        </div>
      </div>

      <div>
        <button
          onClick={handleGoogleSignin}
          className="rounded-full border-4 mx-3 p-2"
        >
          <img className="w-10" src={googleIcon} alt="" />
        </button>
        <button
          onClick={handleGoogleSignin}
          className="rounded-full border-4 mx-3 p-2"
        >
          <img className="w-10" src={facebookIcon} alt="" />
        </button>
        <button
          onClick={handleGoogleSignin}
          className="rounded-full border-4 mx-3 p-2"
        >
          <img className="w-10" src={githubIcon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default LogIn;
