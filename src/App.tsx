import { Outlet } from "react-router";
import Navigators from "./components/Navigators/Navigators";
import "./app.css";

const App = () => {
  return (
    <>
      <div className="flex flex-col h-screen text-center gap-5">
        <Navigators />
        <Outlet />
      </div>
    </>
  );
};

export default App;
