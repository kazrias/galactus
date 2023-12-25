import { useEffect } from "react";

export const useLocalStorage = (favorites) => {
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])
}