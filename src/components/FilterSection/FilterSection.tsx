import { useData } from "../../context/DataContext";

interface FilterSectionProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  category: string;
  handleCategoryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  priceRange: number[];
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
}

const FilterSection = ({
  search,
  setSearch,
  priceRange,
  setPriceRange,
  category,
  handleCategoryChange,
}: FilterSectionProps) => {
  const { categories, loading } = useData();

  const handleReset = () => {
    setSearch("");
    setPriceRange([10000, 200000]);
    // Reset category if needed
  };

  if (loading) return <p className="text-center py-6">Loading ...</p>;

  return (
    <div className="mt-6 bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-md w-full md:w-64 shrink-0">
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-white p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-6"
      />

      {/* Categories */}
      <h2 className="font-semibold text-lg text-gray-800 mb-2">Category</h2>
      <div className="flex flex-col gap-2 mb-4">
        {categories?.map((item, index) => (
          <div key={index} className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              value={item}
              checked={category === item}
              onChange={handleCategoryChange}
            />
            <label className="cursor-pointer uppercase">{item}</label>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <h2 className="font-semibold text-lg text-gray-800 mb-2">Price Range</h2>
      <div className="flex flex-col gap-1 mb-4">
        <span className="text-gray-600 text-sm">
          NPR {priceRange[0]} - NPR {priceRange[1]}
        </span>
        <input
          type="range"
          min={10000}
          max={200000}
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          className="w-full accent-yellow-500"
        />
      </div>

      {/* Reset Filters */}
      <button
        onClick={handleReset}
        className="w-full mt-5 bg-yellow-500 text-white rounded-lg px-3 py-2 hover:bg-yellow-600 transition-all duration-200"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;
