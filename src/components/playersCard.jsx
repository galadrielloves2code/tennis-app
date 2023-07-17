import React from "react";

export function PlayerCard() {
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
          }}
        >
          <img
            src="../assets/playersIcons/2.png"
            className="card-img-top"
            alt="player picture"
            style={{ height: "15rem", width: "10rem", marginTop: "30px" }}
          />
          <div className="card-body">
            <a
              href="#"
              className="btn"
              style={{
                width: "12rem",
                height: "5rem",
                backgroundColor: "#F2F1F1",
                borderRadius: "0 0 25px 25px ",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Player Name
            </a>
          </div>
        </div>
  );
}
