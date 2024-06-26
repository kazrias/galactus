import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export const useNavigateTo = (loading) => {
  const navigate = useNavigate();
  const { logged } = useSelector((state) => state.app.loggedUser);
  useEffect(() => {
    if (!loading && !logged) {
      navigate("/login");
    }
  }, [logged, loading]);
};
