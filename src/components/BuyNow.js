import Image from "next/image";
import Button from "./Button";

const BuyNow = () => {
  return (
    <div className=" flex flex-col gap-3 justify-start">
      <div className=" flex items-center gap-5  ">
        <Button text={"Try For Free"} />
        <div className="flex  gap-3 items-center whitespace-nowrap">
          <span >Availeble on:</span>

          <Image src={"os.svg"} alt="" width={100} height={100} />
        </div>
      </div>
      <span className="text-sm whitespace-nowrap">Buy now for $40 only</span>
    </div>
  );
};

export default BuyNow;
