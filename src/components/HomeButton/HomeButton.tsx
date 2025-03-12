import React from "react";
import { Link } from "react-router";
import { Home } from "lucide-react";

const HomeButton = () => {
  return (
    <div className="sticky m-2 text-left">
      <Link to="/">
        <Home size={24} className="inline text-left" />
      </Link>
    </div>
  );
};

export default React.memo(HomeButton);
