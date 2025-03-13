import React from "react";
import { Link } from "react-router";
import { Home } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { Undo2 } from "lucide-react";

const Navigators = () => {
  const navigator = useNavigate();
  const location = useLocation();

  return (
    <div className="flex sticky m-2">
      <div className="basis-1/3 text-left">
        <Link to="/">
          <Home size={24} />
        </Link>
      </div>
      <div className="basis-1/3">
        {location.pathname == "/" ? (
          <></>
        ) : (
          <button onClick={() => navigator(-1)}>
            <Undo2 />
          </button>
        )}
      </div>
    </div>
  );
};

export default React.memo(Navigators);
