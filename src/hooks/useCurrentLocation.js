import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import { changePath } from "../store/slices/appSlice";

export const useCurrentLocation = () => {
  const dispatch = useDispatch();
  let location = useLocation();
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        dispatch(changePath({ path: "home" }));
        break;
      case "/orders":
        dispatch(changePath({ path: "orders" }));
        break;
      case "/favorites":
        dispatch(changePath({ path: "favorites" }));
        break;
    }
  }, [location]);
};
