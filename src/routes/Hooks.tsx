import Counter from "../components/Hooks/Counter";
import Menu from "../components/Menu/Menu";
import { MenuOptions } from "../components/Menu/types";

const hookOptions: MenuOptions[] = [
  {
    path: "/hooks/use-reducer",
    name: "Counter",
  },
];

const useReducerOptions: MenuOptions[] = [
  {
    path: "/hooks/use-reducer/counter",
    name: "Counter",
  },
];

const Hooks = [
  {
    path: "/hooks",
    element: <Menu options={hookOptions} />,
  },
  {
    path: "/hooks/use-reducer",
    element: <Menu options={useReducerOptions} />,
  },
  {
    path: "/hooks/use-reducer/counter",
    element: <Counter />,
  },
];

export default Hooks;
