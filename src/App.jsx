import { Link, Outlet } from "react-router";
import { Home } from "lucide-react";
import "./app.css";

const App = () => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="sticky m-2">
          <Link to="/">
            <Home size={24} />
          </Link>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default App;
