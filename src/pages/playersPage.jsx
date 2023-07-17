import React from "react";
import { PlayerCard } from "../components/playersCard";

export function PlayersPage() {
  return (
    <div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "30px",
          marginBottom: "50px",
        }}
      >
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
        <PlayerCard />
      </div>
    </div>
  );
}
