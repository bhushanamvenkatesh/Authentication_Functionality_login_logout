// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="header-links">
    <Link to="/" className="each-link">
      <li>Home</li>
    </Link>

    <Link to="/about" className="each-link">
      <li>About</li>
    </Link>
  </div>
)

export default withRouter(Header)
