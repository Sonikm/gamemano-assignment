"use client";
import Image from "next/image";
import Line from "./Line";
import Link from "next/link";
import { useState } from "react";
import Notifications from "./Notifications";

const NavIconList = () => {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div
      onClick={() => setShowNotification(!showNotification)}
      className="flex items-center gap-4"
    >
      {showNotification && <Notifications />}
      <Image
        className="cursor-pointer"
        src={"/notification.svg"}
        alt=""
        width={38}
        height={38}
      />
      <Line height={"h-[30px]"} />
      <Image src={"/shop.svg"} alt="" width={38} height={38} />
      <Line height={"h-[30px]"} />
      <Link href={"/login"}>
        <Image src={"/user.svg"} alt="" width={38} height={38} />
      </Link>
    </div>
  );
};

export default NavIconList;
