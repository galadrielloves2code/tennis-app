import React, { useState } from "react";
import playerInfo from "../API/playerInfo.json";

export function PlayerCard({ rank }) {
  const playerRanking = playerInfo.tennis_players[rank];
  const playerName = playerRanking.name;
  const imagePath = `../assets/playersIcons/${playerRanking.rank}.png`;

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
