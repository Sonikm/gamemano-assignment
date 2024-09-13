import Image from "next/image";
import Line from "./Line";
import Link from "next/link";

const NavIconList = () => {
  return (
    <div className="flex items-center gap-4">
      <Image
        className=""
        src={"/notification.svg"}
        alt=""
        width={38}
        height={38}
      />
      <Line height={"h-[30px]"} />
      <Image src={"/shop.svg"} alt="" width={38} height={38} />
      <Line height={"h-[30px]"} />
      <Link href={'/login'}><Image src={"/user.svg"} alt="" width={38} height={38} /></Link>
    </div>
  );
};

export default NavIconList;
