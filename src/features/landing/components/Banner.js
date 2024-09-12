import Button from "@/components/Button";
import BuyNow from "@/components/BuyNow";
import Image from "next/image";

const Banner = () => {
  return (
    <div className=" flex flex-col justify-start gap-12 max-w-[700px] pl-4 z-30  ">
      <div className="flex flex-col justify-start max-w-[450px]">
        <h1 className="font-wallpoet  sm:text-[60px] text-5xl whitespace-nowrap  md:text-[70px] text-white ">Days Gone</h1>
        <div className=" bg-[#1E1E1E] md:text-sm text-xs p-2 text-end">
          RELEASE DATE : 30TH DECEMBER
        </div>
      </div>

      <p className="font-prostoOne  ">
        Players assume the role of Deacon St. John, a former bounty hunter
        struggling to survive in a post-apocalyptic world filled with
        zombie-like creatures called Freaks. Though players are surrounded by
        death and danger on all sides, the world that they get to explore feels
        as though {"it's "} truly alive, which can encourage players to take risks
        when they probably {"shouldn't"}.
      </p>

      <div className=" flex flex-col gap-3 justify-start">
        <BuyNow />
        <div className="mt-4 text-xs flex gap-2 items-center -top-2">
          <div className="bg-green-500 shadow-md shadow-green-500 w-2 h-2 rounded-full  "></div>
          <p>Buy now for $40 only</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
