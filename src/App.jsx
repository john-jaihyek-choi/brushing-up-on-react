import { Outlet } from "react-router";
import HomeButton from "./components/HomeButton";
import "./app.css";

const App = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <HomeButton />
        <Outlet />
      </div>
    </>
  );
};

export default App;
