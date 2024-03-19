export const OrderProduct = () => {
  return (
    <>
      {
        <div className='products-item'>
          <div className='products-item__link'>
            <img className='products-item__img' alt='' />
            <div className='products-item__hidden products-item__hidden--secondImg'></div>
            <div className='products-item__hidden products-item__hidden--thirdImg'></div>
          </div>
          <div className='products-item__info'>
            <p className='products-item__title'>
              <span></span>
            </p>
            <p className='products-item__price'></p>
          </div>
        </div>
      }
    </>
  );
};
