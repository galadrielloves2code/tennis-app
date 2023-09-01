import React from "react";
import playerInfo from "../API/playerInfo.json";

export function RankingListMen() {
  return (
    <div>
      <table
        className="container table table-borderless table-hover"
        style={{ marginTop: "50px", width: "650px" }}
      >
        <thead>
          <tr className="table-success">
            <th scope="col">Rank</th>
            <th scope="col">+/- Rank</th>
            <th scope="col">Player</th>
            <th scope="col">Points</th>
            <th scope="col">+/- Points</th>
            <th scope="col">Tourn Played</th>
          </tr>
        </thead>
        <tbody>
          {playerInfo.tennis_players.map((player) => (
            <tr key={player.id}>
              <td scope="row">{player.rank}</td>
              <td>{player["+/-rank"] !== 0 ? player["+/-rank"] : "-"}</td>
              <td>{player.name}</td>
              <td>{player.points}</td>
              <td>{player["+/-points"] !== 0 ? player["+/-points"] : "-"}</td>
              <td>{player.tournPlayed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
