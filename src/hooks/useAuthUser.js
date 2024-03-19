import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loginUser } from "../store/slices/appSlice";

import { auth } from "../config/firebaseConfig";

import { onAuthStateChanged } from "firebase/auth";

export const useAuthUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        dispatch(loginUser({ logged: true, data: uid }));
      } else {
        dispatch(loginUser({ logged: false, data: "" }));
      }
    });
    return () => {
      listener();
    };
  }, []);
};
