import APIFetchMethods from "../components/APIFetch/APIFetchMethods";
import FetchExample1 from "../components/APIFetch/FetchExample1";

const apiFetchMethods = [
  {
    path: "/api-fetch-methods",
    element: <APIFetchMethods />,
    children: [
      {
        path: "example-1",
        element: <FetchExample1 />,
      },
    ],
  },
];

export default apiFetchMethods;
