import './Header.css'
import logo from '../../images/logo.png'
import { CartBtn } from '../CartBtn/CartBtn'
import { FavBtn } from '../FavBtn/FavBtn'
export const Header = ({ onClickCart }) => {

  return (

    <header className='header'>
      <a className='header-link' href="">
        <img className='header-logo' src={logo} alt="" />
        <span>Galactus</span>
      </a>
      <div className="header-btns">
        <FavBtn />
        <CartBtn onClickCart={onClickCart} />
      </div>
    </header>
  )
}