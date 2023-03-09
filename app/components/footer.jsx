import React from 'react';
import Nav from './nav';

function Footer() {
  return (
    <footer className="c-footer">
      <div className="o-container">
        <div className="c-footer__content">
          <Nav />
          <p className="c-footer__copyright">
            All rights reserved {new Date().getFullYear()} &copy;
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
