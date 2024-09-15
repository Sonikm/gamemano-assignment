"use client";
import { useCategory } from "@/context/CategoryContext";
import { useSearch } from "@/context/SearchContext";
import useCategoryList from "@/hooks/useCategoryList";

const FilterProductSidedebar = ({ setToggleFilterSidebar }) => {
  const { selectedCategory, setSelectedCategory } = useCategory();
  const { setSearchQuery } = useSearch();

  const { categories, isLoading } = useCategoryList();

  const handleCategoryChange = (category) => {
    setSelectedCategory(selectedCategory === category ? "all" : category);
    setSearchQuery("");
    setToggleFilterSidebar(false);
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className="bg-[#362F25] p-6 mt-2 rounded-lg w-[300px] shadow-lg shadow-[#201f1f]">
      <div className="">
        <h3 className="text-white font-medium mb-4">All</h3>
        <label className="flex items-center mb-3 text-white">
          <input
            type="checkbox"
            name="all"
            onChange={() => handleCategoryChange("all")}
            checked={selectedCategory === "all"}
            className="appearance-none h-4 w-4 border border-[#5B5A57] rounded-[4px] checked:bg-orange-500 checked:border-orange-500 focus:ring-1 focus:ring-orange-300"
          />
          <span className="ml-2 font-light text-sm">All</span>
        </label>
      </div>

      {/* Categories */}

      <div>
        <h3 className="text-white font-medium mb-4">Categories</h3>
        {categories.map((category) => (
          <label
            key={category.name}
            className="flex items-center mb-3 text-white"
          >
            <input
              type="checkbox"
              name={category.name}
              onChange={() => handleCategoryChange(category.slug)}
              checked={selectedCategory == category.slug}
              className="appearance-none h-4 w-4 border border-[#5B5A57] rounded-[4px] checked:bg-orange-500 checked:border-orange-500 focus:ring-1 focus:ring-orange-300"
            />
            <span className="ml-2 font-light text-sm">{category.name}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterProductSidedebar;
