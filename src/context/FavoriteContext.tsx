import { createContext, useState } from "react";
import type { Product } from "../types/product";

interface FavoriteContextType {
    favorites: Product[];
    addToFavorites: (product: Product) => void;
    removeFromFavorites: (id: number) => void;
    isFavorite: (id: number) => boolean;
}

const FavoriteContext = createContext<FavoriteContextType | null>(null);

export const FavoriteProvider = ({ children }: { children: React.ReactNode }) => {
    const [favorites, setFavorites] = useState<Product[]>([]);

    //add Favorites
    const addToFavorites = (product: Product) => {
        setFavorites((prev) =>
            prev.find((item) => item.id === product.id) ? prev : [...prev, product])
    };

    //remove from favorites
    const removeFromFavorites = (id: number) => {
        setFavorites((prev) => prev.filter((item) => item.id !== id));
    };

    const isFavorite = (id: number) => {
        return favorites.some((item) => item.id === id);
    };


    return (
        <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
            {children}
        </FavoriteContext.Provider>
    )
}