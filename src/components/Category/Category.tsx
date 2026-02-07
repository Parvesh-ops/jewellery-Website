import { useData } from "../../context/DataContext"


const Category = () => {
    const { categories } = useData()
    return (
        <div className="py-8 px-4 sm:px-6 lg:px-20 backdrop-blur-md rounded-2xl mx-auto my-10 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-1 text-center">
                Shop by Category
            </h2>
            <p className=" mb-7 text-gray-600 max-w-xl mx-auto text-center">
                Explore our wide range of authentic Nepali jewellery crafted for every
                tradition, celebration, and moment.
            </p>

            <div className="flex flex-wrap justify-center sm:justify-around gap-4">
                {categories?.map((category, index) => (
                    <button
                        key={index}
                        className="uppercase bg-linear-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md cursor-pointer hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition-all duration-300"
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>

    )
}

export default Category
