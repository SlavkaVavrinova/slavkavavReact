import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__copyright">
        &copy;{' '}
        <Link className="link" to="/">
          SlavkaVav
        </Link>{' '}
        2022
      </div>
    </footer>
  );
};

export default Footer;
