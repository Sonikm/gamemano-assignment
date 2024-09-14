import Line from "@/components/Line";
import Logo from "@/components/Logo";
import NavIconList from "@/components/NavIconList";
import NavList from "@/components/NavList";
import SearchBar from "@/components/SearchBar";

const Navbar = () => {
  return (
    <div className="flex gap-4 justify-between items-center px-4 fixed bg-[#15140F] z-[200] top-0 left-0 w-full    ">
      <div className="flex items-center">
        <Logo />
        <NavList />
      </div>
      <div className="flex items-center  gap-6">
        <SearchBar />
        <div className="lg:flex items-center  lg:opacity-100 hidden relative   gap-6">
          <Line height={"h-[30px]"} />
          <NavIconList />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
