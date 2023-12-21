import './Header.css'
import logo from '../../images/logo.png'
import { CartBtn } from '../CartBtn/CartBtn'
import { FavBtn } from '../FavBtn/FavBtn'
export const Header = ({ total, onClickCart, cartCount }) => {

  return (

    <header className='header'>
      <a className='header-link' href="">
        <img className='header-logo' src={logo} alt="" />
        <span>Galactus</span>
      </a>
      <div className="header-btns">
        <FavBtn />
        
        <CartBtn total={total} onClickCart={onClickCart} cartCount={cartCount} />
      </div>
    </header>
  )
}