import { Link } from 'react-router-dom';
import './home.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <Link to='/' className='navbar-brand'>
        React Redux Contact App
      </Link>
    </nav>
  )
};


export default Navbar;