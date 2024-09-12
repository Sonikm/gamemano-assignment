import React from "react";
import BuyNow from "./BuyNow";
import Ratings from "@/components/Ratings";

const Evolution = () => {
  return (
    <div className="flex bg-black text-white p-10 justify-center  items-center relative">
      <div className="bg-red-500 lg:basis-[400px] "></div>
      <div className=" basis-[600px]">
        <div className="flex justify-end items-end w-full absolute right-10  ">
          <Ratings />
        </div>
        <div className=" flex flex-col justify-start gap-12 pl-4 z-30  m-10 ">
          <div className="flex flex-col justify-start max-w-[450px]">
            <h1 className="font-aoboshiOne    text-5xl  my-6 md:text-[70px] text-white">
              Evolution
            </h1>
            <div className=" bg-[#1E1E1E] text-sm p-2 text-end">
              RELEASE DATE : 30TH DECEMBER
            </div>
          </div>

          <p className="font-prostoOne ">
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

export default Evolution;
