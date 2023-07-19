import React from "react";

export function WatchButton() {
  return (
    <div>
      <a
        className="btn btn-light"
        href="wwww.google.com"
        role="button"
        style={{ color: "#278CE4", fontWeight: "bold", fontFamily: "Poppins" }}
      >
        <img
          src="/assets/images/play.svg"
          alt="play icon"
          style={{ width: "20px", paddingBottom: "3px" }}
        />
        Watch Live
      </a>
    </div>
  );
}
