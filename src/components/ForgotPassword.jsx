import React from "react";
import { Link } from "react-router";

const ForgotPassword = () => {
  return (
    <>
      <div className="grid h-screen text-center">
        <form onSubmit="" className="grid place-content-center gap-5">
          <h1>Forgot Password</h1>
          <div className="flex flex-col">
            <label className="text-left" htmlFor="username">
              Email
            </label>
            <input type="email" id="username" />
          </div>

          <div className="flex flex-col gap-3 items-center">
            <input className="button" type="submit" value="Send Verification" />
            <Link className="button" to="/login">
              Back
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
