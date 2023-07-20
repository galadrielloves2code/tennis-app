import React, { useState } from "react";
import { PlayerCard } from "../components/playersCard";
import { Link } from "react-router-dom";
export function HomeBottom() {
  const [count, setCount] = useState(1);

  const renderPlayerCards = () => {
    const playerCards = [];
    for (let i = 0; i <= 3; i++) {
      playerCards.push(<PlayerCard key={i} rank={i} />);
    }
    return playerCards;
  };

  if (count < 3) {
    setCount(count + 1);
  }

  return (
    <div
      className="container-fluid"
      style={{
        marginTop: "30px",
        marginBottom: "50px",
        background:
          "linear-gradient(0deg, #5C9AD7 0%, rgba(7, 103, 197, 0.52) 17.71%, rgba(7, 103, 197, 0.00) 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginLeft: "150px",
          marginRight: "150px",
        }}
      >
        {renderPlayerCards()}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link
          className="nav-link active"
          to="/players"
          style={{
            fontSize: "20px",
            fontFamily: "Poppins",
            marginBottom: "40px",
          }}
        >
          {" "}
          View All Players{" "}
        </Link>
      </div>
    </div>
  );
}
