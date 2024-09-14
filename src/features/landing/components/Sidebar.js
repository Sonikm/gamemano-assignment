"use client";
import { useAuth } from "@/context/AuthContext";
import Image from "next/image";
import { useState } from "react";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { logOut } = useAuth();

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 pt-9 h-full z-[2000] bg-black text-white transition-all duration-300 ease-in-out shadow-lg  ${
        isHovered ? "w-64 " : "w-[119px] "
      }`}
    >
      <div
        className={`${
          isHovered ? " translate-x-0 opacity-100" : "  md:text-3xl text-2xl "
        } absolute left-6 transition-transform duration-1000 ease-in-out font-pressStart2 text-2xl whitespace-nowrap  text-[#DAB785]`}
      >
        {isHovered ? "GameQuest" : "GQ"}
      </div>

      <div className="flex gap-8 mt-24 flex-col border-b-[1px] border-[#5B5A57] pb-12 w-full justify-center items-center">
        <SidebarItem text={"Home"} src={"home.svg"} isHovered={isHovered} />
        <SidebarItem
          text={"Shop"}
          src={"shop-home.svg"}
          isHovered={isHovered}
        />
        <SidebarItem
          text={"Payment"}
          src={"/payment.png"}
          isHovered={isHovered}
        />
        <SidebarItem text={"Menu"} src={"/menu.png"} isHovered={isHovered} />
        <SidebarItem
          text={"Trophy"}
          src={"/trophy.png"}
          isHovered={isHovered}
        />
      </div>

      <div className="flex flex-col gap-8  justify-center items-center mt-10">
        <SidebarItem
          text={"Settings"}
          src={"/settings.png"}
          isHovered={isHovered}
        />
        <div  onClick={logOut} className="relative flex items-center cursor-pointer ">
          <Image
            className="cursor-pointer md:w-[24px] w-[20px] md:h-[24px] h-[20px]"
            src={"/log-out.png"}
            alt={''}
            width={24}
            height={24}
          />
          <span
            className={`absolute left-full bg-black z-[100] ml-2 whitespace-nowrap transition-transform duration-300 ease-in-out ${
              isHovered ? "translate-x-0" : "translate-x-[-100%]"
            } opacity-${isHovered ? 100 : 0}`}
          >
           Log out
          </span>
          <div className="w-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

function SidebarItem({ isHovered, src, text }) {
  return (
    <div className="relative flex items-center cursor-pointer ">
      <Image
        className="cursor-pointer md:w-[24px] w-[20px] md:h-[24px] h-[20px]"
        src={src}
        alt={text}
        width={24}
        height={24}
      />
      <span
        className={`absolute left-full bg-black z-[100] ml-2 whitespace-nowrap transition-transform duration-300 ease-in-out ${
          isHovered ? "translate-x-0" : "translate-x-[-100%]"
        } opacity-${isHovered ? 100 : 0}`}
      >
        {text}
      </span>
      <div className="w-4"></div>
    </div>
  );
}
