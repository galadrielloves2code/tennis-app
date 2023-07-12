import React from "react";

export function PlayerPictures({ playerLastName }) {
  const imagePath = `/assets/playersPictures/${playerLastName}.png`; // Resim dosyasının yolu

  return (
    <div>
      <img
        src={imagePath}
        alt={playerLastName}
        className="container"
        style={{ paddingLeft: "5px", height: "15.5rem" }}
      />
    </div>
  );
}
