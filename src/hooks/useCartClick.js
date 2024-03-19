import { useState } from "react";

export const useCartClick = () => {
  const [isCartOpened, setIsCartOpened] = useState(false);
  const [isCartClosing, setIsCartClosing] = useState(false);
  const onClickOverlay = () => {
    setIsCartClosing(true);
    setTimeout(() => {
      setIsCartOpened(false);
    }, 500);
  };

  const onClickCart = () => {
    if (isCartOpened) {
      setIsCartClosing(true);
      setTimeout(() => {
        setIsCartOpened(false);
      }, 500);
      document.body.style.overflow = "";
    } else {
      setIsCartClosing(false);
      setIsCartOpened(true);
      if (window.innerWidth <= 530) {
        document.body.style.overflow = "hidden";
      }
    }
  };

  const onClickAnyList = () => {
    onClickOverlay();
    document.body.style.overflow = "";
  };
  return {
    onClickOverlay,
    onClickCart,
    onClickAnyList,
    isCartClosing,
    isCartOpened,
  };
};
