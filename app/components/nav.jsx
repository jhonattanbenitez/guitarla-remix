import { Link, useLocation } from '@remix-run/react'; 

function Nav() {
  const location = useLocation()
  return (
    <nav className="c-nav">
      <Link
        to="/"
        className={
          location.pathname === '/'
            ? 'c-nav__link c-nav__link--active'
            : 'c-nav__link'
        }
      >
        Home
      </Link>
      <Link
        to="/about-us"
        className={
          location.pathname === '/about-us'
            ? 'c-nav__link c-nav__link--active'
            : 'c-nav__link'
        }
      >
        About Us
      </Link>
      <Link
        to="/guitars"
        className={
          location.pathname === '/guitars'
            ? 'c-nav__link c-nav__link--active'
            : 'c-nav__link'
        }
      >
        Store
      </Link>
      <Link
        to="/blog"
        className={
          location.pathname === '/blog'
            ? 'c-nav__link c-nav__link--active'
            : 'c-nav__link'
        }
      >
        Blog
      </Link>
    </nav>
  );
}

export default Nav;
