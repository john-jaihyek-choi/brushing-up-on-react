import Counter from "../components/Hooks/Counter";
import ToggleSelector from "../components/Hooks/ToggleSelector";
import UserProfile from "../components/Hooks/SettingsPage/UserProfile";
import Menu from "../components/Menu/Menu";
import { MenuOptions } from "../components/Menu/types";

const hookOptions: MenuOptions[] = [
  {
    path: "/hooks/use-reducer",
    name: "useReducer",
  },
  {
    path: "/hooks/use-context",
    name: "useContext",
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

const useContextOptions: MenuOptions[] = [
  {
    path: "/hooks/use-context/settings-page",
    name: "Settings Page",
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
    path: "/hooks/use-context",
    element: <Menu options={useContextOptions} />,
  },
  {
    path: "/hooks/use-reducer/counter",
    element: <Counter />,
  },
  {
    path: "/hooks/use-reducer/toggle-selector",
    element: <ToggleSelector />,
  },
  {
    path: "/hooks/use-context/settings-page",
    element: <UserProfile />,
  },
];

export default Hooks;
