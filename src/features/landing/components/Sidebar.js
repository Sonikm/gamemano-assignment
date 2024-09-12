import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="  flex flex-col gap-10 w-full max-w-[104px]  justify-center items-center pt-6 ">
      <div className="flex gap-8 flex-col border-b-[1px] border-[#5B5A57] pb-12 w-full  justify-center items-center">
        <Image className="cursor-pointer" src={"home.svg"} alt="" width={24} height={24} />
        <Image className="cursor-pointer" src={"envelope.svg"} alt="" width={24} height={24} />
        <Image className="cursor-pointer" src={"shop-home.svg"} alt="" width={24} height={24} />
        <Image className="cursor-pointer" src={"/payment.png"} alt="" width={24} height={24} />
        <Image className="cursor-pointer" src={"/menu.png"} alt="" width={24} height={24} />
        <Image className="cursor-pointer" src={"/trophy.png"} alt="" width={24} height={24} />
      </div>

      <div className=" flex flex-col gap-8">
        <Image className="cursor-pointer" src={"/settings.png"} alt="" width={24} height={24} />
        <Image className="cursor-pointer" src={"/log-out.png"} alt="" width={24} height={24} />
      </div>
    </div>
  );
};

export default Sidebar;
//p-[43px]  py-8 