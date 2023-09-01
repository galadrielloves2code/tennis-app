import React from "react";
import { HomeTop } from "../components/homeTop";
import { HomeNews } from "../components/homeNews";
import { HomeBottom } from "../components/homeBottom";
import { HomeTournaments } from "../components/homeTournaments";

export function Home() {
  return (
    <div>
      <HomeTop />
      <HomeNews />
      <HomeBottom />
      <HomeTournaments/>
    </div>
  );
}
