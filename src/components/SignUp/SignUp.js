import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import googleIcon from "../../images/google.png";
import facebookIcon from "../../images/facebook.png";
import githubIcon from "../../images/github.png";

const SignUp = () => {
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  const handleGoogleSignin = () => {
    signInWithGoogle();
  };

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const user = { email, password };

    createUserWithEmailAndPassword(email, password);
    console.log(user);
  };

  return (
    <div className=" border-2 w-96 mx-auto rounded-xl p-8">
      <h1 className="text-2xl text-emerald-500 font-semibold">
        Please Sign Up
      </h1>

      <div className="flex items-center my-5">
        <div className="m-2">
          <hr className="w-16 bg-slate-400  rounded-md" />
        </div>
        <div>
          <span className="text-sm text-slate-400 ">Create a new account</span>
        </div>
        <div className="m-2">
          <hr className="w-16 bg-slate-400  rounded-md" />
        </div>
      </div>

      <form onSubmit={handleSignUp} className="my-5">
        <div className="my-4 mx-8 text-left ">
          <label htmlFor="name">Name*</label>
          <br />
          <input
            className="border-2 rounded-full w-60 py-1 px-2"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div className="my-4 mx-8 text-left ">
          <label htmlFor="email">Email*</label>
          <br />
          <input
            className="border-2 rounded-full w-60 py-1 px-2"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>

        <div className="my-4 mx-8 text-left">
          <label htmlFor="password">Password*</label>
          <input
            className="border-2 rounded-full w-60 py-1 px-2"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div className="my-4 mx-8 text-left">
          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input
            className="border-2 rounded-full w-60 py-1 px-2"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
          />
        </div>
        <div className="m-3 flex items-center">
          <input type="checkbox" name="confirm" id="confirm" />
          <p className="mx-2">
            I agree to all{" "}
            <span className="m-1 text-teal-900 font-semibold">
              terms and conditions?
            </span>{" "}
          </p>
        </div>

        <div className="rounded-full py-2 my-5 bg-lime-600 w-52 mx-auto ">
          <input
            className="text-white font-semibold text-xl"
            type="submit"
            value="Sign Up"
          />
        </div>
      </form>
      <div>
        <p>
          Have a account?
          <Link className="mx-1 text-sky-500 font-semibold" to="/login">
            LogIn
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
export default SignUp;
