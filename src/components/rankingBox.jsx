import React, { useState, useEffect } from "react";

const RankingBox = ({ name }) => {
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
    <div style={{paddingRight:"10px"}}>
      <div
        style={{
          border: "0.25px solid black",
          padding: "7px",
          borderRadius: "20px",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
          display: "flex",
          justifyContent: "center",
          marginLeft: "10px",
          height: "100px",
          width:"80px",
          textAlign:"center",
          alignItems:"center",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1>{playerData.id}</h1>
        </div>
      </div>
      <p className="info" style={{display:"flex", justifyContent:"center", paddingLeft:"9px"}}>Singles Rank</p>
    </div>
  );
};

export default RankingBox;
