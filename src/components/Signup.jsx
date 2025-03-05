import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <>
      <div className="grid h-screen text-center">
        <form onSubmit="" className="grid place-content-center gap-5">
          <h1>Sign-Up</h1>
          <div className="flex flex-col">
            <label className="text-left" htmlFor="username">
              Email
            </label>
            <input type="email" id="username" />
          </div>

          <div className="flex flex-col">
            <label className="text-left" htmlFor="password">
              Password
            </label>
            <input type="password" id="password" />
          </div>

          <div className="flex flex-col">
            <label className="text-left" htmlFor="password-check">
              Password Check
            </label>
            <input type="password" id="password-check" />
          </div>

          <div className="flex flex-col gap-3 items-center">
            <input className="button" type="submit" value="Submit" />
            <Link className="button" to={"/login"}>
              Back
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
