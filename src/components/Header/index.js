// Write your code here
import {GiHamburgerMenu} from 'react-icons/gi'
import './index.css'

const Header = () => (
  <div className="header-container">
    <nav className="nav-items">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="krishna"
        className="logo"
      />

      <GiHamburgerMenu className="icon" />
    </nav>
  </div>
)
export default Header
