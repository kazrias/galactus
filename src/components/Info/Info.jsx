import './Info.css';
import { Categories } from '../Categories/Categories';
import { useState, useEffect } from 'react';
import { Products } from '../Products/Products';
import axios from 'axios';

export const Info = () => {
  const [products, setProducts] = useState([]);
  const [currCategory, setCurrCategory] = useState('Clothes')

  useEffect(() => {
    async function fetchData() {
      const productRes = await axios.get(`https://65738184063f876cec9cfc5b.mockapi.io/${currCategory}`);
      setProducts(productRes.data);
    }
    fetchData();
  }, [currCategory])
  return (
    <section className="info">
      <div className="container container--info">
        <Categories currCategory={currCategory} setCurrCategory={setCurrCategory} />
        <h1 className="info-title">{currCategory}</h1>
        <Products items={products} />
      </div>
    </section>
  )
}

//При клике добавлять  свойство rID, чтоб потом в корзине удалять по rID
