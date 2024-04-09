import { List } from "../components/List/List";

import { useAuthUser } from "../hooks/useAuthUser";
import { useNavigateTo } from "../hooks/useNavigateTo";

export const FavoritesPage = () => {
  const loading = useAuthUser();
  useNavigateTo(loading);
  if (loading) return <div>AAAAAAA</div>;
  return <List />;
};
