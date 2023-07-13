import React from "react";
import Flag from "./flag";

export function PlayerIcon({ playerLastName }) {
  const imagePath = `/assets/playersIcons/${playerLastName}.png`; // Resim dosyasının yolu

  return (
    <div style={{ display: "flex" }}>
      <img
        src={imagePath}
        alt="Player's picture"
        style={{
          border: "1px solid #d3d3d3",
          height: "35px",
          width: "35px",
          borderRadius: "100px",
          objectFit: "contain",
        }}
      />
      <Flag
        countryCode="IT"
        altText="Italy Flag"
        style={{ height: "5px", width: "10px" }}
      />
    </div>
  );
}
