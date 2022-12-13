import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, signUp } = UserAuth();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(email, password);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/aa54bdde-6259-4f76-b724-a1d4db679427/VN-en-20221128-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="..."
        />
        <div className="w-full fixed h-screen absolute top-0 left-0 bg-black/60"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              <form
                className="w-full flex flex-col py-4"
                onSubmit={handleSubmit}
              >
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                    console.log(e.target.value);
                  }}
                  className="p-3 my-2 bg-gray-500 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-500 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold ">
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input type="checkbox" className="mr-2" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-4">
                  <span className="text-gray-600 ">
                    Already subcribed to Netflix ?{" "}
                  </span>{" "}
                  <NavLink to="/login"> Sign In</NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
