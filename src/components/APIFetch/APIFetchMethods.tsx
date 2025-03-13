import { Link } from "react-router";

const Login = () => {
  return (
    <div className="flex-container gap-2 flex-xy-center">
      <Link to="/api-fetch-methods/example-1" className="button">
        Fetch Example 1
      </Link>
    </div>
  );
};

export default Login;
