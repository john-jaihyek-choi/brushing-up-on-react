import UseReducer from "../components/Hooks/UseReducer";
import Menu from "../components/Menu/Menu";
import { MenuOptions } from "../components/Menu/types";

const menuOptions: MenuOptions[] = [
  {
    path: "/hooks/use-reducer",
    name: "useReducer",
  },
];

const Hooks = [
  {
    path: "/hooks",
    element: <Menu options={menuOptions} />,
  },
  {
    path: "/hooks/use-reducer",
    element: <UseReducer />,
  },
];

export default Hooks;
