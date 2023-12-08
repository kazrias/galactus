export const Product = ({ name, price, images }) => {
  return (
    <div className="products-item">
      <h4>{name}</h4>
      <img src={images.first} alt="" />
      <p>{price}</p>
    </div>
  )
}