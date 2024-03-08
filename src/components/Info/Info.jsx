import './Info.css';
import { Categories } from '../Categories/Categories';
import { useState, useEffect } from 'react';
import { Products } from '../Products/Products';

import { fetchCategory } from '../../services/fetchCategory';
import { useDispatch, useSelector } from 'react-redux';

import { addProducts } from '../../store/slices/appSlice';

export const Info = ({ }) => {
  const dispatch = useDispatch()
  const currCategory = useSelector(state => state.app.category)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const res = await fetchCategory(currCategory)
      setIsLoading(false)
      dispatch(addProducts({ products: res.data }))
    }
    fetchData();
  }, [currCategory])

  return (
    <section className="info">
      <div className="container container--info">
        <Categories />
        <Products isLoading={isLoading} />
      </div>
    </section>
  )
}

