import { useEffect } from "react";

export const useFavorites = (favorites) => {
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])
}