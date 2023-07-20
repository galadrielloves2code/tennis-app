import React from "react";
import { HomeTop } from "../components/homeTop";
import { HomeMiddle } from "../components/homeMiddle";
import { HomeBottom } from "../components/homeBottom";

export function Home() {
  return (
    <div>
        <HomeTop/>
        <HomeMiddle/>
        <HomeBottom/>
    </div>
  );
}
