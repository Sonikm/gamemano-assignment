import Link from "next/link";

const NavList = () => {
  return (
    <ul className="flex gap-4 p-6 text-white text-base px-14 whitespace-nowrap">
      <Link href={"/"}>
        <li className="border-r-[1px] border-[#5B5A57] pr-4 py-1 hover:text-[#DAB785] cursor-pointer transition">
          Home
        </li>
      </Link>
      <Link href={"game-store"}>
        <li className="border-r-[1px] border-[#5B5A57] pr-4 py-1 hover:text-[#DAB785] cursor-pointer transition">
          Product Store
        </li>
      </Link>
      <Link href={"leaderboard"}>
        <li className="hover:text-[#DAB785] cursor-pointer py-1 transition">
          Leaderboard
        </li>
      </Link>
    </ul>
  );
};

export default NavList;
