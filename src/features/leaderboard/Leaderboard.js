import React from "react";
import TopBanner from "./components/TopBanner";
import LeaderboardDescription from "./components/LeaderboardDescription";
import LeaderRanks from "./components/LeaderRanks";
import ArenaSelection from "./components/ArenaSelection";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import GamesList from "./components/GameList";

const Leaderboard = () => {
  return (
    <div className="bg-[#2F2B22]  w-full mt-24 h-full mx-auto flex flex-col justify-center items-center rounded-xl shadow-lg ">
      <TopBanner />
      <LeaderboardDescription />
      <LeaderRanks />
      <ArenaSelection />
      <Reviews />
      <GamesList />
      <Footer />
    </div>
  );
};

export default Leaderboard;
