import React, { useState } from "react";
import playerInfo from "../API/playerInfo.json";

export function PlayerCard({ rank }) {
  const playerRanking = playerInfo.tennis_players[rank];
  const playerName = playerRanking.name;
  const playerImagePath = `../assets/playersIcons/${playerRanking.rank}.png`;
  const placeholderImagePath = "../assets/playersIcons/999.png";

  const [imagePath, setImagePath] = useState(playerImagePath);

  // Function to check if the player's image exists, otherwise use the placeholder image
  const checkImageExists = (imagePath, placeholderPath) => {
    const img = new Image();
    img.src = imagePath;
    img.onerror = () => setImagePath(placeholderPath);
  };

  // Check if the player's image exists, if not, set the placeholder image
  checkImageExists(playerImagePath, placeholderImagePath);

  return (
    <div
      className="card"
      style={{
        width: "12rem",
        height: "20rem",
        borderRadius: "24.557px",
        boxShadow:
          "0px 13.9154634475708px 13.096906661987305px 0px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
      }}
    >
      <img
        src={imagePath}
        className="card-img-top"
        alt="player picture"
        style={{ height: "13rem", width: "8rem", marginTop: "30px" }}
      />
      <div className="card-body">
        <a
          href="#"
          className="btn"
          style={{
            width: "12rem",
            height: "6rem",
            backgroundColor: "#F2F1F1",
            borderRadius: "0 0 25px 25px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {playerName}
        </a>
      </div>
    </div>
  );
}
