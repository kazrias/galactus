import { List } from "../components/List/List";

import { useAuthUser } from "../hooks/useAuthUser";
import { useNavigateTo } from "../hooks/useNavigateTo";

import loadingImg from "../images/Alien-isolated-on-transparent-background-PNG.png";

export const FavoritesPage = () => {
  const loading = useAuthUser();
  useNavigateTo(loading);
  if (loading)
    return (
      <div>
        <img src={loadingImg} alt='' />
      </div>
    );
  return <List />;
};
