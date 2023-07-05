import React from "react";

export function PlayerPictures({ playerLastName }) {
  const imagePath = `/assets/playersPictures/${playerLastName}.png`; // Resim dosyasının yolu

  return (
    <div>
      <img src={imagePath} alt={playerLastName} className="container" style={{paddingLeft: "20px"}}/>
    </div>
  );
}