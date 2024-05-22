import './index.css'

const Header = props => {
  return (
    <div className="header">
      <img
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <ul className="nav-link-list">
        <li>
          <a href="#" className="nav-link">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Products
          </a>
        </li>
        <li>
          <a href="#" className="nav-link">
            Cart
          </a>
        </li>
        <li>
          <a href="#" className="nav-link logout-btn">
            Logout
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header
