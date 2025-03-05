import { Link } from "react-router";
import Login from "./components/Login";

import "./App.css";

const App = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <Login />
    </div>
  );
};

export default App;
