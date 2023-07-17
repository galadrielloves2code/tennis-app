import React from "react";
import { Header } from "../components/header";
import { PlayersPage } from "./playersPage";

export function Home() {
  return (
    <div>
      <Header />
      <PlayersPage />
    </div>
  );
}
