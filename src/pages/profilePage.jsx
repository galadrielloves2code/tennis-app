import React from "react";
import Flag from "../components/flag";
import { PlayerPictures } from "../components/playersPictures";

export function Profile() {
  return (
    <div style={{display:"flex"}}>
      <div
        className="container"
        style={{ border: "1px solid black", padding: "10px" }}
      >
        <div
          className="container"
          style={{
            border: "1px solid black",
            padding: "10px",
            display: "flex",
          }}
        >
          <Flag countryCode="italiy" altText="Italiy Flag" />
          <p style={{ marginLeft: "10px" }}>Jannik Sinner</p>
          <h1
            style={{
              border: "1px solid black",
              padding: "20px",
              marginLeft: "auto",
              borderRadius: "20px",
            }}
          >
            8
          </h1>
        </div>
        <div style={{ display: "flex" }}></div>
      </div>
      <div>
        <PlayerPictures/>
      </div>
    </div>
  );
}
