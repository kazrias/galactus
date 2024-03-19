import "./ProfileMenu.css";

import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { loginUser } from "../../store/slices/appSlice";
import { updateCart } from "../../store/slices/cartSlice";

import { auth } from "../../config/firebaseConfig";

import { signOut } from "firebase/auth";

export const ProfileMenu = ({ profileClicked }) => {
  const [outClicked, setOutClicked] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const signOutUser = async () => {
      await signOut(auth)
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
      dispatch(loginUser({ logged: false, data: "" }));
      dispatch(updateCart([]));
      setOutClicked(false);
    };
    if (outClicked) {
      signOutUser();
    }
  }, [outClicked]);
  return (
    <ul className={`profile-menu ${profileClicked ? "active" : ""}`}>
      <li onClick={() => setOutClicked(true)} className='profile-meni__item'>
        <button className='profile-meni__item-btn'>Log Out</button>
      </li>
    </ul>
  );
};
