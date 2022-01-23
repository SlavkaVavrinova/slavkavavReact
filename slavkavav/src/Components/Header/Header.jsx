import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import logo from './../../logo.svg';

const Header = () => {
  const [isMenuOpened, setisMenuOpened] = useState(false);

  const mobileMenuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setisMenuOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  const openMenu = () => {
    setisMenuOpened(!isMenuOpened);
  };

  return (
    <>
      <div className="navigation">
        <img
          className="navigation__logo"
          src={logo}
          alt="Logo Slávka Vavřinová"
        />
        <span className="navigation__hamburger" onClick={openMenu}>
          <span className="navigation__rows"></span>
        </span>

        {isMenuOpened ? (
          <ul ref={mobileMenuRef} className="navigation-open">
            <li className="navigation__item">
              <Link to="/" onClick={openMenu}>
                DOMŮ
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/portfolio" onClick={openMenu}>
                PORTFOLIO
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/zivotopis" onClick={openMenu}>
                ŽIVOTOPIS
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/koucovani" onClick={openMenu}>
                KOUČOVÁNÍ
              </Link>
            </li>
            <li className="navigation__item">
              <Link to="/kontakt" onClick={openMenu}>
                KONTAKT
              </Link>
            </li>
          </ul>
        ) : null}

        <ul className="navigation__large">
          <li className="navigation__item">
            <Link to="/">DOMŮ</Link>
          </li>
          <li className="navigation__item">
            <Link to="/portfolio">PORTFOLIO</Link>
          </li>
          <li className="navigation__item">
            <Link to="/zivotopis">ŽIVOTOPIS</Link>
          </li>
          <li className="navigation__item">
            <Link to="/koucovani">KOUČOVÁNÍ</Link>
          </li>
          <li className="navigation__item">
            <Link to="/kontakt" o>
              KONTAKT
            </Link>
          </li>
        </ul>
      </div>
      <div className="banner">
        <div className="banner__text">
          <h1 className="banner__title">Slávka Vavřinová</h1>
          <p>
            ZAČÍNAJÍCÍ WEBOVÁ VÝVOJÁŘKA <br />A STUDENTKA UX
          </p>
        </div>
        <div className="box"></div>
        {/* <img className="banner__img" src={slavka} alt=" Slávka Vavřinová" />*/}
      </div>{' '}
    </>
  );
};

export default Header;
