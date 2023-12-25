import { useEffect } from "react";

export const useLocalStorage = (favorites) => {
  useEffect(() => {
    console.log('useEffect');
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])
}