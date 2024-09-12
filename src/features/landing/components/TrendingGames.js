import GamingText from "@/components/GamingText";
import Image from "next/image";
import Link from "next/link";
import TrendingProductList from "./TrendingProductList";

const TrendingGames = () => {
  return (
    <div className="bg-[#2E2616] p-10 rounded-lg ">
      <div className=" flex flex-col justify-start gap-4 ">
        <div className="flex justify-between">
          <GamingText text={"MOST TRENDING"} />

          <Link
            href="game-store"
            className="flex justify-end items-center gap-2 uppercase text-white text-lg hover:text-orange-300"
          >
            <span>GO TO GAME STORE</span>
            <Image src={"arrow-right.svg"} alt="" width={30} height={20} />{" "}
          </Link>
        </div>
        <TrendingProductList />
      </div>
    </div>
  );
};

export default TrendingGames;
