import React from "react";
import { WatchButton } from "./buttons/watchButton";

export function HomeTop() {
  return (
    <div style={{ position: "relative" }}>
      <img
        src="/assets/images/homeBg1.png"
        alt="background"
      />
      <div
        style={{
          position: "absolute",
          bottom: "210px",
          left: "300px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <img
          src="/assets/images/tennis.png"
          style={{ width: "500px", height: "80px", marginBottom:"20px"}}
        />

        <div
          style={{
            color: "#FFF",
            fontFamily: "Poppins",
          }}
        >
          <h4>News-Scores-Match Reports</h4>
        </div>
        <WatchButton />
      </div>
      <div
        style={{
          position: "absolute",
          left: "197px",
          bottom: "154.501px",
          width: "10vw",
          height: "10vw",
          flexShrink: "0",
        }}
      >
        <img
          src="/assets/images/ball.png"
          style={{ width: "100%", height: "100%" }}
          alt="ball"
        />
      </div>
    </div>
  );
}
