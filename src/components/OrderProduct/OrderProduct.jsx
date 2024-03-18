import { useState } from 'react'
export const OrderProduct = () => {
  const [isHoveredSecond, setIsHoveredSecond] = useState(false);
  const [isHoveredThird, setIsHoveredThird] = useState(false);
  return (<>
    {
      <div className="products-item">
        <div className="products-item__link">
          <img className='products-item__img'  alt="" />
          <div onMouseEnter={() => setIsHoveredSecond(true)} onMouseLeave={() => setIsHoveredSecond(false)} className='products-item__hidden products-item__hidden--secondImg'></div>
          <div onMouseEnter={() => setIsHoveredThird(true)} onMouseLeave={() => setIsHoveredThird(false)} className='products-item__hidden products-item__hidden--thirdImg'></div>
        </div>
        <div className="products-item__info">
          <p className='products-item__title'><span>{name}</span></p>
          <p className='products-item__price'>{price}$</p>
        </div>
      </div >
    }

  </>
  )
}