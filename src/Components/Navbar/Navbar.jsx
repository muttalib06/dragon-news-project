import { NavLink } from "react-router";
import userIcon from "../../assets/user.png";

import { AuthContext } from "../../provider/AuthProvider";
import { use } from "react";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        alert("Logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-between items-center pt-8">
      <div>{user && user.email}</div>
      <div className="space-x-3 text-[#706F6F]">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-3">
        <img className="rounded-full" src={userIcon} alt="" />

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-black text-white px-3 py-2 rounded"
          >
            Logout
          </button>
        ) : (
          <NavLink
            to="/auth/login"
            className="bg-black text-white px-3 py-2 rounded"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
