import { Link } from "react-router-dom";

const components = [
  {
    path: "/login",
    name: "Login Form",
  },
  {
    path: "/api-fetch-methods",
    name: "API Fetch Methods",
  },
  {
    path: "/flexbox",
    name: "Flexbox",
  },
];

const MenuOptions = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      {components.map(({ path, name }) => (
        <Link key={name} id={name} to={path} className="button max-w-100">
          {name}
        </Link>
      ))}
    </div>
  );
};
export default MenuOptions;
