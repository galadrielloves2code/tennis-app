import React from "react";
import Flag from "../components/flag";
import { PlayerPictures } from "../components/playersPictures";
import { InstagramButton } from "../components/buttons/instagramButton";
import { TwitterButton } from "../components/buttons/twitterButton";

export function Profile() {
  return (
    <div style={{ display: "flex" }}>
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
          <Flag countryCode="italy" altText="Italy Flag" />
          <p style={{ marginLeft: "10px" }}>Jannik Sinner</p>

          <div style={{ display: "block", marginLeft: "auto" }}>
            <h1
              style={{
                border: "1px solid black",
                padding: "20px",
                borderRadius: "20px",
                textAlign: "center",
              }}
            >
              8
            </h1>
            <p>Singles Rank</p>
          </div>
        </div>
        <div style={{ display: "flex" }}></div>
      </div>
      <div>
        <PlayerPictures playerLastName="sinner" />
      </div>
    </div>
  );
}
