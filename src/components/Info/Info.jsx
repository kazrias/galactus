import './Info.css';
import { Categories } from '../Categories/Categories';
import { useState, useEffect } from 'react';
import { Products } from '../Products/Products';
import axios from 'axios';

export const Info = ({setCartItems,cartItems}) => {
  const [products, setProducts] = useState([]);
  const [currCategory, setCurrCategory] = useState('Clothes')
  useEffect(() => {
    async function fetchData() {
      let urlToFetch = ''
      if (currCategory === 'Clothes' || currCategory === 'Shoes')
        urlToFetch = 'https://65738184063f876cec9cfc5b.mockapi.io/'
      else
        urlToFetch = 'https://6575ca31b2fbb8f6509d8140.mockapi.io/'
      const productRes = await axios.get(urlToFetch + currCategory);
      setProducts(productRes.data);
    }
    fetchData();
  }, [currCategory])

  return (
    <section className="info">
      <div className="container container--info">
        <Categories currCategory={currCategory} setCurrCategory={setCurrCategory} />
        {/* <h1 className="info-title">{currCategory}</h1> */}
        <Products setCartItems={setCartItems} cartItems={cartItems} items={products} />
      </div>
    </section>
  )
}

//При клике добавлять  свойство rID, чтоб потом в корзине удалять по rID
