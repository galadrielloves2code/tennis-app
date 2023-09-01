import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { Header } from "./components/header";
import Schedule from "./pages/schedulePage";
import { TournamentsPage } from "../src/pages/tournamentsPage";
import { RankingListMen } from "./pages/rankingPageMen";
import { PlayersPage } from "../src/pages/playersPage";
import { RankingListWomen } from "./pages/rankingPageWomen";
import { PlayersPageWomen } from "./pages/playersPageWomen";
import { SignInPage } from "./pages/signInPage";
import { SignUp } from "./pages/singUpPage";
import { Profile } from "./pages/profilePage";

export function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/tournaments" element={<TournamentsPage />} />
        <Route path="/ranking/ATP" element={<RankingListMen />} />
        <Route path="/ranking/WTA" element={<RankingListWomen />} />
        <Route path="/players/ATP" element={<PlayersPage />} />
        <Route path="/players/profile" element={<Profile />} />
        <Route path="/players/WTA" element={<PlayersPageWomen />} />
        <Route path="/signIn" element={<SignInPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
