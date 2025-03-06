import React from "react";
import { Link } from "react-router";
import HomeButton from "../HomeButton";
import "./loginForm.css";

const Login = () => {
  return (
    <>
      <div className="grid h-screen text-center">
        <form onSubmit="" className="grid place-content-center gap-5">
          <h1>Login</h1>
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
            <Link className="text-xs text-left underline" to="/forgot-password">
              Forgot password?
            </Link>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <input className="button" type="submit" value="Login" />
            <Link className="button" to="/sign-up">
              Sign-up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
