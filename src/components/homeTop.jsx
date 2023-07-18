import React from "react";

export function HomeTop() {
  return (
    <div style={{ position: "relative" }}>
      <img
        src="/assets/images/homeBg1.png"
        alt="background"
        className="container-fluid"
      />
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
      <div
        style={{
          position: "absolute",
          left: "390px",
          bottom: "320px",
          color: "#FFF",
          fontFamily: "Bungee Shade",
          fontSize: "10vw",
          fontWeight: "bold",
          letterSpacing: "1.5vw",
        }}
      >
        <h1>TENNIS</h1>
      </div>
      <div
        style={{
          position: "absolute",
          right: "420px",
          bottom: "280px",
          color: "#FFF",
          fontFamily: "Poppins",
        }}
      >
        <h4>News-Scores-Match Reports</h4>
      </div>
    </div>
  );
}
