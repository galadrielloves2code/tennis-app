import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { Header } from './components/header';
import { Schedule } from "../src/pages/schedulePage";
import { TournamentsAccordion } from "../src/pages/tournamentsPage";
import { RankingList } from "../src/pages/rankingPage";
import { PlayersPage } from "../src/pages/playersPage";

export function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/tournaments" element={<TournamentsAccordion />} />
        <Route path="/ranking" element={<RankingList />} />
        <Route path="/players" element={<PlayersPage />} />
      </Routes>
    </Router>
  );
}

export default App;
