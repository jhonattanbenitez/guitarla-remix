import { Link } from '@remix-run/react';
import logo from '../../public/img/logo.svg';
import Nav from './nav';

function Header() {
    
   
  return (
    <header className="c-header">
      <div className="o-container">
        <div className="c-navbar">
          <Link to="/">
            <img src={logo} alt="logo" className="c-logo" />
          </Link>
         <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
