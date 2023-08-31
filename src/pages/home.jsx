import React from "react";
import { HomeTop } from "../components/homeTop";
import {HomeNews } from "../components/homeNews";
import { HomeBottom } from "../components/homeBottom";

export function Home() {
  return (
    <div>
        <HomeTop/>
        <HomeNews/>
        <HomeBottom/>
    </div>
  );
}
