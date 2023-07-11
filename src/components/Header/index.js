// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <nav className="nav-header">
      <ul className="list-container">
        <Link to="/" className="nav-link">
          <li className="item home">Home</li>
        </Link>
        <Link to="/about" className="nav-link">
          <li className="item about">About</li>
        </Link>
      </ul>
    </nav>
  </>
)

export default Header
