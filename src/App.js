import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Header } from "./components/header";
import { Schedule } from "../src/pages/schedulePage";
import { TournamentsAccordion } from "../src/pages/tournamentsPage";
import { RankingListMen } from "./pages/rankingPageMen";
import { PlayersPage } from "../src/pages/playersPage";
import { RankingListWomen } from "./pages/rankingPageWomen";

export function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/tournaments" element={<TournamentsAccordion />} />
        <Route path="/ranking/ATP" element={<RankingListMen />} />
        <Route path="/ranking/WTA" element={<RankingListWomen />} />
        <Route path="/players" element={<PlayersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
