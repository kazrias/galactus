import { useEffect } from "react"
export const useLocalStorageData = (items, setters) => {
  useEffect(() => {
    items.forEach((item) => {
      const res = localStorage.getItem(item)

      if (res) {
        setters[item](JSON.parse(res))
      }
    })
  }, [])
}