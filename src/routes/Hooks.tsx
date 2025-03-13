import Counter from "../components/Hooks/Counter";
import ToggleSelector from "../components/Hooks/ToggleSelector";
import Menu from "../components/Menu/Menu";
import { MenuOptions } from "../components/Menu/types";

const hookOptions: MenuOptions[] = [
  {
    path: "/hooks/use-reducer",
    name: "useReducer",
  },
];

const useReducerOptions: MenuOptions[] = [
  {
    path: "/hooks/use-reducer/counter",
    name: "Counter",
  },
  {
    path: "/hooks/use-reducer/toggle-selector",
    name: "Toggle Selector",
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
  {
    path: "/hooks/use-reducer/toggle-selector",
    element: <ToggleSelector />,
  },
];

export default Hooks;
