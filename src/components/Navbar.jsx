import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <NavLink to="">
        <h1 className="text-red-600 text-4xl font-bold - cursor-pointer">
          NETFLIX
        </h1>
      </NavLink>

      <div>
        <NavLink to="/login">
          <button className="text-white py-2 px-6">Sign In</button>
        </NavLink>
        <NavLink to="/signup">
          <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
            Sign Up
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
