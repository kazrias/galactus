import './Header.css'
import logo from '../../images/logo.png'
export const Header = () => {
  return (
    <header className='header'>
      <a className='header-link' href="">
        <img className='header-logo' src={logo} alt="" />
        <span>myShop</span>
      </a>
    </header>
  )
}