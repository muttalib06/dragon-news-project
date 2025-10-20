import React from "react";
import { NavLink } from "react-router";
import user from "../../assets/user.png"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-8">
      <div></div>
      <div className="space-x-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3">
        <img className="rounded-full" src={user} alt="" />
        <button className="bg-black text-white px-3 py-1 rounded">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
