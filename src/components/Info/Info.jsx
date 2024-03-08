import './Info.css';
import { Categories } from '../Categories/Categories';
import { useState, useEffect } from 'react';
import { Products } from '../Products/Products';

import { fetchCategory } from '../../services/fetchCategory';

export const Info = ({  }) => {
  

  return (
    <section className="info">
      <div className="container container--info">
        <Categories />
        <Products />
      </div>
    </section>
  )
}

