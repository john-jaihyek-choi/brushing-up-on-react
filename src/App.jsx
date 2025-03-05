import { Link } from "react-router";
import Login from "./components/Login";

const components = [
  {
    path: "/login",
    name: "Login Form",
  },
  {
    path: "/api-fetch-methods",
    name: "API Fetch Methods",
  },
];

const App = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      {components.map(({ path, name }) => (
        <Link id={name} to={path} className="button max-w-50">
          {name}
        </Link>
      ))}
    </div>
  );
};

export default App;
