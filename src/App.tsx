import { Outlet } from "react-router";
import HomeButton from "./components/HomeButton/HomeButton";
import "./app.css";

const App = () => {
  return (
    <>
      <div className="flex flex-col h-screen text-center gap-5">
        <HomeButton />
        <Outlet />
      </div>
    </>
  );
};

export default App;
