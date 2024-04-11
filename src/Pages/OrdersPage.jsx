import { useSelector } from "react-redux";

import { List } from "../components/List/List";
import { Loading } from "../components/Loading/Loading";

import { useAuthUser } from "../hooks/useAuthUser";
import { useFetchItems } from "../hooks/useFetchItems";
import { useNavigateTo } from "../hooks/useNavigateTo";

export const OrdersPage = () => {
  useFetchItems("orders");
  const loading = useAuthUser();
  const ordersLoading = useSelector((state) => state.orders.loading);
  useNavigateTo(loading);

  if (loading || ordersLoading) return <Loading />;
  return <List />;
};
