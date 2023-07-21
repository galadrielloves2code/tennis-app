import React, { useState } from "react";
import { PlayerCardWomen } from "../components/playersCardWomen";

export function PlayersPageWomen() {
  const [count, setCount] = useState(1);

  const renderPlayerCardWomen  = () => {
    const playerCards = [];
    for (let i = 0; i <= 99; i++) {
      playerCards.push(<PlayerCardWomen  key={i} rank={i} />);
    }
    return playerCards;
  };

  if (count < 20) {
    setCount(count + 1);
  }

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent:"space-between",
        marginTop: "30px",
        marginBottom: "50px",
        width: "65rem",
        flexWrap: "wrap",
      }}
    >
      {renderPlayerCardWomen ()}
    </div>
  );
}
