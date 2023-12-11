import './Info.css';
import { Categories } from '../Categories/Categories';
import { useState, useEffect } from 'react';
import { Products } from '../Products/Products';
import axios from 'axios';

export const Info = () => {
  const [products, setProducts] = useState([]);
  const [currCategory, setCurrCategory] = useState('Clothes')
  const [favItems, setFavItems] = useState([]);
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
  useEffect(() => {
    async function fetchFavs() {
      try {
        const favs = await axios.get('https://65773d3b197926adf62dc01f.mockapi.io/Favorites');
        setFavItems(favs.data);
      }
      catch (err) {
        console.log(err);
      }
    }
    fetchFavs();
  }, [])
  return (
    <section className="info">
      <div className="container container--info">
        <Categories currCategory={currCategory} setCurrCategory={setCurrCategory} />
        {/* <h1 className="info-title">{currCategory}</h1> */}
        <Products favItems={favItems} items={products} />
      </div>
    </section>
  )
}

//При клике добавлять  свойство rID, чтоб потом в корзине удалять по rID
