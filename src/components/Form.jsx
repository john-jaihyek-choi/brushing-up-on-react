import React from "react";
import { Link } from "react-router";

const Form = () => {
  return (
    <>
      <div className="grid h-screen">
        <form action="" className="grid place-content-center gap-3">
          <div className="flex flex-col">
            <label className="text-left" htmlFor="username">
              Username
            </label>
            <input style={{ borderColor: "black" }} type="text" id="username" />
          </div>
          <div className="flex flex-col">
            <label className="text-left" htmlFor="password">
              Password
            </label>
            <input style={{ borderColor: "black" }} type="text" id="password" />
          </div>
          <div className="flex flex-col gap-2 items-center">
            <input className="button" type="submit" value="submit" />
            <Link className="button" to={"/"}>
              Back
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
