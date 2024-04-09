import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useAuthUser } from "./useAuthUser";

export const useNavigateTo = () => {
  const navigate = useNavigate();
  const { logged } = useSelector((state) => state.app.loggedUser);
  const loading = useAuthUser();
  useEffect(() => {
    if (!loading && !logged) {
      navigate("/login");
    }
  }, [logged, loading]);
};
