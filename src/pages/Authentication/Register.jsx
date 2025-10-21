import React, { use } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h3 className="text-center pt-5 text-xl font-semibold text-[#403F3F]">
          Register Your Account
        </h3>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />

            {/* photo url */}

            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              className="input"
              placeholder="URL"
            />
            <label className="label">Password</label>

            {/* email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            {/* password */}

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
            <p className="text-center pt-4">
              Already Have an Account?{" "}
              <NavLink to="/auth/login" className={"text-[#F75B5F]"}>
                Login
              </NavLink>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
