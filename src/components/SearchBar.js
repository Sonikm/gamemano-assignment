import { useSearch } from "@/context/SearchContext";
import Image from "next/image";

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-2 border-[#757473] flex items-center p-3 pl-4  rounded-3xl w-[300px]"
    >
      <Image
        src="/search.svg"
        width={18}
        height={18}
        alt="Picture of the author"
      />
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border-none outline-none bg-inherit text-sm w-full px-4 "
        type="text"
        placeholder="What are you looking for?"
      />
    </form>
  );
};

export default SearchBar;
