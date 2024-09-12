import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import TrendingGames from "./components/TrendingGames";
import Evolution from "@/components/Evolution";
import Valorant from "../../components/Valorant";
import Warlords from "../../components/Warlords";
import Footer from "../../components/Footer";

const Home = () => {

  return (
    <div className="flex items-start ">
      <Sidebar />
      <div className="border-l-[1px] -top-[100px] h-full border-[#5B5A57] absolute left-[120px] z-[100]"></div>
      <div className=" p-10 w-full flex flex-col gap-14 overflow-hidden ">
        <Banner />
        <TrendingGames />
        <Evolution />
        <Valorant />
        <Warlords />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
