import './Header.css'
import logo from '../../images/logo.png'
import { CartBtn } from '../CartBtn/CartBtn'
import { FavBtn } from '../FavBtn/FavBtn'
import { Link } from 'react-router-dom'
export const Header = ({ total, onClickCart, cartCount }) => {

  return (

    <header className='header'>
      <Link to='/' className='header-link' >
        <img className='header-logo' src={logo} alt="" />
        <span>Galactus</span>
      </Link>
      <div className="header-btns">
        <Link to='/orders' className="header-orders">Orders</Link>
        <Link to='/favorites'>
          <FavBtn />
        </Link>
        <CartBtn total={total} onClickCart={onClickCart} cartCount={cartCount} />
      </div>
    </header>
  )
}