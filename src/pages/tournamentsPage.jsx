import React from "react";
import { TournamentsAccordion } from "../components/tournaments";
import { BottomHeader } from "../components/bottomHeader";

export function TournamentsPage() {
  return (
    <div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="/assets/images/tournaments.png"
          style={{
            height: "521px",
            width: "100%",
            marginBottom: "100px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "521px",
            background: "rgba(0, 0, 0, 0.5)", // Şeffaf katmanın rengi ve opaklığı
          }}
        ></div>

        <p
          style={{
            color: "white",
            fontWeight: "bold",
            position: "absolute",
            fontSize: "24px",
            zIndex: 1,
          }}
        >
          TOURNAMENTS
        </p>
      </div>
      <TournamentsAccordion />
      <BottomHeader />
    </div>
  );
}
