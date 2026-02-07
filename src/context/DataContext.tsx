import { createContext, useEffect, useState } from "react";
import type { Product } from "../types/product";
import { products as productData } from "../data/products";

interface DataContextType {
    data: Product[];
    loading: boolean;
    fetchAllProducts: () => void;
}

const DataContext = createContext<null | DataContextType>(null)

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
    const [data, setData] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const fetchAllProducts = async () => {
        try {
            setLoading(true)
            setData(productData)
        } catch (error) {
            console.error("An error occurred while fetching products:", error);
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchAllProducts()
    }, []);

    return (
        <DataContext.Provider value={{ data, loading, fetchAllProducts }}>
            {children}
        </DataContext.Provider>
    )

}