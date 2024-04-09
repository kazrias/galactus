import "./Product.css";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart, deleteFromCart } from "../../store/slices/cartSlice";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../../store/slices/favoritesSlice";

import { database } from "../../config/firebaseConfig";

import add from "../../images/add.svg";
import added from "../../images/added.svg";
import like from "../../images/liked.svg";
import unlike from "../../images/unliked.svg";

import { push, ref, remove, set } from "firebase/database";

import Sceleton from "../Sceleton/Sceleton";

export const Product = ({ isLoading, id, name, price, images }) => {
  const navigate = useNavigate();
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [isHoveredThird, setIsHoveredThird] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const favoriteItems = useSelector((state) => state.favorites.favorites);
  const { logged, data } = useSelector((state) => state.app.loggedUser);
  const dispatch = useDispatch();

  const onClickAddCart = async () => {
    if (!logged) {
      navigate("/login");
      return;
    }
    if (isAdded) {
      const key = cartItems.find((cart) => cart.id == id).key;
      const cartItemRef = ref(database, `cart/${data}/${key}`);
      await remove(cartItemRef);
      dispatch(deleteFromCart({ id }));
    } else {
      const cartRef = ref(database, `cart/${data}`);
      const newCartItemRef = await push(cartRef);
      const key = newCartItemRef.key;
      await set(newCartItemRef, { id, name, price, images, key });
      // dispatch(addToCart({ id, name, price, images, key }))
    }
  };

  const onClickLike = async () => {
    if (!logged) {
      navigate("/login");
      return;
    }
    if (isLiked) {
      const key = favoriteItems.find((cart) => cart.id == id).key;
      const favItemRef = ref(database, `favorites/${data}/${key}`);
      await remove(favItemRef);
      dispatch(deleteFromFavorites({ id }));
    } else {
      const favRef = ref(database, `favorites/${data}`);
      const newFavItemRef = await push(favRef);
      const key = newFavItemRef.key;
      await set(newFavItemRef, { id, name, price, images, key });
    }
  };

  useEffect(() => {
    setIsAdded(cartItems.some((item) => item.id == id));
  }, [isLoading, cartItems.length]);

  useEffect(() => {
    setIsLiked(favoriteItems.some((item) => item.id == id));
  }, [isLoading, favoriteItems.length]);

  return (
    <>
      {isLoading ? (
        <Sceleton />
      ) : (
        <div className='products-item'>
          <div className='products-item__link'>
            <img
              className='products-item__img'
              src={
                isHoveredSecond
                  ? images.second
                  : isHoveredThird
                    ? images.third
                    : images.first
              }
              alt=''
            />
            <div
              onMouseEnter={() => setIsHoveredSecond(true)}
              onMouseLeave={() => setIsHoveredSecond(false)}
              className='products-item__hidden products-item__hidden--secondImg'
            ></div>
            <div
              onMouseEnter={() => setIsHoveredThird(true)}
              onMouseLeave={() => setIsHoveredThird(false)}
              className='products-item__hidden products-item__hidden--thirdImg'
            ></div>
            <button
              onMouseEnter={() => setIsHoveredThird(true)}
              onMouseLeave={() => setIsHoveredThird(false)}
              onClick={onClickLike}
              className={`products-item__like ${isLiked ? "active" : ""}`}
            >
              {" "}
              <img src={isLiked ? like : unlike} alt='like/dislike' />
            </button>
          </div>
          <div className='products-item__info'>
            <p className='products-item__title'>
              <span>{name}</span>
            </p>
            <p className='products-item__price'>{price}$</p>
            <button
              onClick={onClickAddCart}
              className={`products-item__add ${isAdded ? "active" : ""}`}
            >
              <img src={isAdded ? added : add} alt='add/delete' />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
