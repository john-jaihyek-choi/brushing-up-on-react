import { Link, Outlet } from "react-router";
import FetchExample1 from "./FetchExample1";

const Login = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <Link to="/api-fetch-methods/example-1" className="button max-w-100">
        Fetch Example 1
      </Link>
      <Outlet />
    </div>
  );
};

export default Login;
