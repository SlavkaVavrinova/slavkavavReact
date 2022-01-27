import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__copyright">
        &copy; <Link to="/"> SlavkaVav.cz </Link> 2021
      </div>
    </footer>
  );
};

export default Footer;
