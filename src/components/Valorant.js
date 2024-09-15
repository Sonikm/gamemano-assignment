import React from "react";
import BuyNow from "./BuyNow";
import Ratings from "@/components/Ratings";

const Valorant = () => {
  return (
    <div className="flex bg-[#201A0F] text-white py-4  sm:p-10 justify-center items-center relative">
      <div className="bg-red-500"></div>
      <div className=" basis-[600px]">
        <div className="flex justify-end items-end w-full absolute right-10 ">
          <Ratings />
        </div>
        <div className=" flex flex-col justify-start gap-12 pl-4 z-30   m-10 ">
          <div className="flex flex-col justify-start max-w-[450px]">
            <h1 className="font-aoboshiOne  text-3xl sm:text-5xl  my-6 md:text-[70px] text-white">
              Valorant
            </h1>
            <div className=" bg-[#1E1E1E] text-xs p-2 text-end md:text-sm text-wra">
              RELEASE DATE : 30TH DECEMBER
            </div>
          </div>

          <p className="font-prostoOne md:text-base text-sm">
            Players assume the role of Deacon St. John, a former bounty hunter
            struggling to survive in a post-apocalyptic world filled with
            zombie-like creatures called Freaks. Though players are surrounded
            by death and danger on all sides, the world that they get to explore
            feels as though {"it's"} truly alive, which can encourage players to
            take risks when they probably {"shouldn't"}.
          </p>

          <BuyNow />
        </div>
      </div>
    </div>
  );
};

export default Valorant;
