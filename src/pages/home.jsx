import React from "react";
import { Profile } from "./profilePage";
import { Header } from "../components/header";

export function Home() {
  return (
    <div>
      <Header/>
      <Profile/>
    </div>
  );
}
