"use client";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";

const Sidebar = () => {
  const {logOut} = useAuth();
  return (
    <div className="  flex flex-col gap-10 w-full md:max-w-[104px] max-w-[60px]   justify-center items-center pt-4 ">
      <div className="flex gap-8 flex-col border-b-[1px] border-[#5B5A57] pb-12 w-full  justify-center items-center">
        <Image className="cursor-pointer md:w-[24px] w-[20px] md:h-[24px] h-[20px] " src={"home.svg"} alt="" width={24} height={24} />
        <Image className="cursor-pointer md:w-[24px] w-[20px] md:h-[24px] h-[20px] " src={"envelope.svg"} alt="" width={24} height={24} />
        <Image className="cursor-pointer md:w-[24px] w-[20px] md:h-[24px] h-[20px] " src={"shop-home.svg"} alt="" width={24} height={24} />
        <Image className="cursor-pointer md:w-[24px] w-[20px] md:h-[24px] h-[20px] " src={"/payment.png"} alt="" width={24} height={24} />
        <Image className="cursor-pointer md:w-[24px] w-[20px] md:h-[24px] h-[20px] " src={"/menu.png"} alt="" width={24} height={24} />
        <Image className="cursor-pointer md:w-[24px] w-[20px] md:h-[24px] h-[20px] " src={"/trophy.png"} alt="" width={24} height={24} />
      </div>

      <div className=" flex flex-col gap-8">
        <Image className="cursor-pointer md:w-[24px] w-[20px] md:h-[24px] h-[20px] " src={"/settings.png"} alt="" width={24} height={24} />
        <Image onClick={logOut} className="cursor-pointer md:w-[24px] w-[20px] md:h-[24px] h-[20px] " src={"/log-out.png"} alt="" width={24} height={24} />
      </div>
    </div>
  );
};

export default Sidebar;
//p-[43px]  py-8 