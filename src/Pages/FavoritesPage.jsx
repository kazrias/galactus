import { List } from "../components/List/List";
import { Loading } from "../components/Loading/Loading";

import { useAuthUser } from "../hooks/useAuthUser";
import { useNavigateTo } from "../hooks/useNavigateTo";

export const FavoritesPage = () => {
  const loading = useAuthUser();
  useNavigateTo(loading);
  if (loading) return <Loading />;
  return <List />;
};
