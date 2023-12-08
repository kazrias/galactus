import './Header.css'
import logo from '../../images/logo.png'
export const Header = () => (
  <header className='header'>
    <a className='header-link' href="">
      <img className='header-logo' src={logo} alt="" />
      <span>Galactus</span>
    </a>
  </header>
)
