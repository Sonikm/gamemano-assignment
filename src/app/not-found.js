import Button from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-full mt-[200px] gap-4">
      <h2 className="text-4xl font-semibold ">Page not found</h2>
      <p className="font-light ">Could not find requested resource</p>
      <Link className="bg-orange-500 text-white p-[12px] px-6 rounded-3xl hover:bg-orange-600" href={"/"}>
        Back to Home
      </Link>
    </div>
  );
}
