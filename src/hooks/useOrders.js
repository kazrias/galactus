import { useEffect } from "react"

export const useOrders = orders => {
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orders));
  }, [orders])
}