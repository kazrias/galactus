import { useSelector } from "react-redux";

import { List } from "../components/List/List";
import { Loading } from "../components/Loading/Loading";

import { useAuthUser } from "../hooks/useAuthUser";
import { useFetchItems } from "../hooks/useFetchItems";
import { useNavigateTo } from "../hooks/useNavigateTo";

export const FavoritesPage = () => {
  useFetchItems("favorites");
  const loading = useAuthUser();
  const favsLoading = useSelector((state) => state.favorites.loading);
  useNavigateTo(loading);
  if (loading || favsLoading) return <Loading />;
  return <List />;
};
