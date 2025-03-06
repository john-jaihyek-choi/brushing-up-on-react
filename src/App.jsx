import { Link, Outlet } from "react-router";
import { Home } from "lucide-react";
import "./app.css";

const App = () => {
  return (
    <>
      <div className="flex flex-col h-screen text-center gap-5">
        <div className="sticky m-2 text-left">
          <Link to="/">
            <Home size={24} className="inline text-left" />
          </Link>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default App;
