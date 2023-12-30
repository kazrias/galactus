import './Info.css';
import { Categories } from '../Categories/Categories';
import { useState, useEffect } from 'react';
import { Products } from '../Products/Products';

import { fetchCategory } from '../../services/fetchCategory';

export const Info = ({ setFavorites, favorites, setCartItems, cartItems, path }) => {
  const [products, setProducts] = useState([]);
  const [currCategory, setCurrCategory] = useState('Clothes')
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const res = await fetchCategory(currCategory)
      setIsLoading(false)
      setProducts(res.data);
    }
    fetchData();
  }, [currCategory])

  return (
    <section className="info">
      <div className="container container--info">
        <Categories currCategory={currCategory} setCurrCategory={setCurrCategory} />
        <Products path={path} isLoading={isLoading} setFavorites={setFavorites} favorites={favorites} setCartItems={setCartItems} cartItems={cartItems} items={products} />
      </div>
    </section>
  )
}

