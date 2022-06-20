import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function ActiveLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        style={{ backgroundColor: match ? "#3385D9" : "rgba(128, 128, 128, 0.301)", color: match ? "white" : "black"  }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && ""}
    </div>
  );
}

export default ActiveLink;
