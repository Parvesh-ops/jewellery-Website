import { useState } from "react";
import { useData } from "../context/DataContext";
import FilterSection from "../components/FilterSection/FilterSection";
import ProductCard from "../components/ProductCard/ProductCard";
import Pagination from "../components/Pagination/Pagination";

const Product = () => {
  const { data } = useData();

  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("All");
  const [priceRange, setPriceRange] = useState<number[]>([10000, 200000]);
  const [page, setPage] = useState<number>(1);

  // Category filter handler
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
    setPage(1); // reset page to 1 on filter change
  };

  // Pagination handler
  const pageHandler = (selectedPage: number) => setPage(selectedPage);

  // Filtered products
  const filteredData = data?.filter((item) => (
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || item.category === category) &&
    item.price >= priceRange[0] &&
    item.price <= priceRange[1]
  ))

  // Total pages
  const totalPages = Math.ceil(filteredData?.length / 8);

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      {data?.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-8 max-w-7xl mx-auto">
          {/* Filter Section */}
          <div className="w-full md:w-1/4">
            <FilterSection
              search={search}
              setSearch={setSearch}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              category={category}
              handleCategoryChange={handleCategoryChange}
            />
          </div>

          {/* Products Section */}
          <div className="w-full md:w-3/4 flex flex-col items-center">
            {filteredData?.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                  {filteredData
                    .slice((page - 1) * 8, page * 8)
                    .map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <Pagination
                    page={page}
                    pageHandler={pageHandler}
                    dynamicPage={totalPages}
                  />
                )}
              </>
            ) : (
              <div className="flex justify-center items-center w-full mt-10">
                <p className="text-gray-500 text-lg">
                  No products found matching your filters.
                </p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-80">
          <p className="text-red-500 font-bold text-center">
            Loading products...
          </p>
        </div>
      )}
    </div>
  );
};

export default Product;
