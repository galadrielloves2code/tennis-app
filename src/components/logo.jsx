import React from "react";
import { Link } from "react-router-dom";

export function Logo() {
  return (
    <div>
      <Link className="nav-link active" to="/">
        <img
          src="../assets/logos/logo.png"
          alt="logo"
          style={{ width: "181.5px", height: "60px", flexShrink: "0" }}
        />
      </Link>
    </div>
  );
}
