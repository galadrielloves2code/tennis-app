import React, { useState, useEffect } from "react";

const PlayerProfile = ({ name }) => {
  const [playerData, setPlayerData] = useState(null);

  useEffect(() => {
    fetch("../assets/API/playerInfo.json")
      .then((response) => response.json())
      .then((data) => {
        const player = data.tennis_players.find(
          (player) => player.name === name
        );
        setPlayerData(player);
      });
  }, [name]);

  if (!playerData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container, info" style={{ display: "flex" }}>
      <div className="infoBox">
        <p>Age: {playerData.age}</p>
        <p>Weight: {playerData.weight}</p>
        <p>Height: {playerData.height}</p>
        <p>Birthplace: {playerData.birthplace}</p>
        <p>Turned Pro: {playerData.turned_pro}</p>
      </div>
      <div className="infoBox">
        <p>Plays: {playerData.plays}</p>
        <p>Coach: {playerData.coach}</p>
      </div>
    </div>
  );
};

export default PlayerProfile;
