import { Link } from "react-router";
import { MenuOptions } from "./types";

interface MenuProps {
  options: MenuOptions[];
}

const Menu = ({ options }: MenuProps) => {
  return (
    <div className="flex-container gap-2 flex-xy-center">
      {options.map(({ path, name }) => (
        <Link key={path} to={path} className="button">
          {name}
        </Link>
      ))}
    </div>
  );
};
export default Menu;
