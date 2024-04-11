export const OrderProduct = ({ name, price, images }) => {
  return (
    <>
      {
        <div className='products-item'>
          <div className='products-item__link'>
            <img src={images.first} className='products-item__img' alt='' />
          </div>
          <div className='products-item__info'>
            <p className='products-item__title'>
              <span>{name}</span>
            </p>
            <p className='products-item__price'>{price}</p>
          </div>
        </div>
      }
    </>
  );
};
