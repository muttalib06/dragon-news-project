import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const { login} = use(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        alert("Information Invalid");
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h3 className="text-center pt-5 text-xl font-semibold text-[#403F3F]">
          Login Your Account
        </h3>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
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
              Dont’t Have An Account ?{" "}
              <NavLink to="/auth/register" className={"text-[#F75B5F]"}>
                Register
              </NavLink>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
