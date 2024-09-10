import React, { useState, useRef } from "react";
import { validateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isSignInForm, setISSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);

  const toggleSignInFrom = () => {
    setISSignInForm(!isSignInForm);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const message = validateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // sign-Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.user, {
            displayName: displayName.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/90685854?v=4",
          })
            .then(() => {
              // profile Updated
              navigate("/browse");
            })
            .catch((error) => {
              //An error occurd
              setErrorMessage(error.message);
            });
          console.log(user);
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          console.log(error.message);
        });
    } else {
      // sign in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_large.jpg"
          className="w-full h-full object-cover"
          alt="Netflix Background"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Netflix Logo */}
      <div className="relative z-10 px-8 py-4">
        <img
          className="w-36"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="Netflix Logo"
        />
      </div>

      {/* Login Form */}
      <div className="relative z-20 flex justify-center items-center h-full">
        <form
          className="bg-black bg-opacity-60 p-8 rounded-lg w-96"
          onSubmit={handleFormSubmit}
        >
          <h2 className="text-white text-3xl mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {/* Name Input (conditionally rendered) */}
          {!isSignInForm && (
            <div className="mb-4">
              <input
                ref={displayName}
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-gray-700 text-white rounded outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          )}
          {/* Email Input */}
          <div className="mb-4">
            <input
              ref={email}
              type="email"
              placeholder="Email or mobile number"
              className="w-full p-3 bg-gray-700 text-white rounded outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-700 text-white rounded outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
          <p className="text-red-500 font-bold text-lg">{errorMessage}</p>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 rounded mb-4 hover:bg-red-700"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {/* Options Below the Sign In Button */}
          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>

          {/* OR Divider */}
          <div className="flex items-center justify-between text-gray-500 mb-4">
            <hr className="flex-grow border-gray-500" />
            <span className="mx-4">OR</span>
            <hr className="flex-grow border-gray-500" />
          </div>

          {/* Use a sign-in code */}
          <a
            href="#"
            className="block text-center text-gray-500 hover:underline mb-4"
          >
            Use a sign-in code
          </a>

          {/* Forgot Password */}
          <a
            href="#"
            className="block text-center text-gray-500 hover:underline mb-4"
          >
            Forgot password?
          </a>

          {/* Signup Section */}
          <div className="text-gray-500 text-center mt-4">
            <span>New to Netflix? </span>
            <a
              href={!isSignInForm ? "/#" : "/"}
              className="text-white hover:underline"
              onClick={toggleSignInFrom}
            >
              Sign up now.
            </a>
          </div>

          {/* Google reCAPTCHA info */}
          <p className="text-xs text-gray-500 text-center mt-4">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <a href="#" className="hover:underline">
              Learn more.
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
