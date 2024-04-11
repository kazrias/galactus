import "./Products.css";

import { useSelector } from "react-redux";

import { OrderProduct } from "../OrderProduct/OrderProduct";
import { Product } from "../Product/Product";

export const Products = ({ isLoading, items=[] }) => {
  const path = useSelector((state) => state.app.path);
  const products = useSelector((state) => state.app.products);
  const renderItems = () => {
    switch (path) {
      case "home":
        return (isLoading ? [...Array(8)] : products).map((obj, index) => (
          <Product
            key={isLoading ? index : obj.id}
            isLoading={isLoading}
            {...obj}
          />
        ));
      case "orders":
        return items.map((obj, index) => <OrderProduct key={obj.orderKey} {...obj}/>);
      case "favorites":
        return items.map((obj, index) => <Product key={obj.id} {...obj} />);
    }
  };
  return <section className='products'>{renderItems()}</section>;
};
