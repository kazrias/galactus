import './HeaderStyle.css'

import { CartBtn } from './HeaderBtns/CartBtn/CartBtn'
import { FavBtn } from './HeaderBtns/FavBtn/FavBtn'
import { Link } from 'react-router-dom'
import { UserBtn } from './HeaderBtns/UserBtn'
import { OrdersBtn } from './HeaderBtns/OrdersBtn'
import { LogoBtn } from './HeaderBtns/LogoBtn'

export const Header = ({ onClickOverlay, total, onClickAnyList, cartCount, onClickCart }) => {
  const onClickList = () => {
    onClickAnyList()
    onClickOverlay()
  }
  return (
    <header className='header'>
      <Link onClick={onClickList} to='/' className='header-link' >
        <LogoBtn />
      </Link>
      <div className="header-btns">
        <Link onClick={onClickList} to='/orders' className="header-orders header-btn">
          <OrdersBtn />
        </Link>
        <Link to='/favorites'>
          <FavBtn onClickList={onClickList} />
        </Link>
        <CartBtn total={total} onClickCart={onClickCart} cartCount={cartCount} />
        <Link className="header-orders header-btn" to='/login'>
          <UserBtn />
        </Link>
      </div>
    </header>
  )
}