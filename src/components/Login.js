// import Header from "./Header";

import React, { useState } from "react";

const Login = () => {
  const [isSignInForm, setISSignInForm] = useState(true);

  const toggleSignInFrom = () => {
    setISSignInForm(!isSignInForm);
  };
  return (
    <div className="relative h-screen">
      {/* <Header /> */}
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
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
        <form className="bg-black bg-opacity-60 p-8 rounded-lg w-96">
          <h2 className="text-white text-3xl mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>

          {/* Name Input (conditionally rendered) */}
          {!isSignInForm && (
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-gray-700 text-white rounded outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
          )}
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email or mobile number"
              className="w-full p-3 bg-gray-700 text-white rounded outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-700 text-white rounded outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

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
              href="#"
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
