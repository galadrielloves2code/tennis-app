import React from "react";

export function PlayerPictures({ playerLastName }) {
  const imagePath = `/assets/playerPicture/${playerLastName}.png`; // Resim dosyasının yolu

  return (
    <div>
      <img src={imagePath} alt={playerLastName} />
    </div>
  );
}