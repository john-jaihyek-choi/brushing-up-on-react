import FetchExample1 from "../components/APIFetch/FetchExample1";
import Menu from "../components/Menu/Menu";
import { MenuOptions } from "../components/Menu/types";

const menuOptions: MenuOptions[] = [
  {
    path: "/api-fetch-methods/fetch-example-1",
    name: "Native useEffect Fetch",
  },
];

const apiFetchMethods = [
  {
    path: "/api-fetch-methods",
    element: <Menu options={menuOptions} />,
  },
  {
    path: "/api-fetch-methods/fetch-example-1",
    element: <FetchExample1 />,
  },
];

export default apiFetchMethods;
