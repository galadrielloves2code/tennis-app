import React from "react";
import { Header } from "../components/header";
import { PlayerCard } from "../components/playersCard";

export function Home() {
  return (
    <div>
      <Header />
      <PlayerCard/>
    </div>
  );
}
