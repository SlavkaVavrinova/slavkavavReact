import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import logo from './../../logo.svg';

const Header = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const openMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const closeMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const mobileMenuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setIsMenuOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  const activeMenuItem = ({ isActive }) => (isActive ? 'activeItem' : '');

  return (
    <>
      <div className="navigation">
        <img
          src={logo}
          className="navigation__logo"
          alt="Logo Slávka Vavřinová"
        />{' '}
        <span
          className={
            isMenuOpened
              ? 'navigation__hamburger open'
              : 'navigation__hamburger'
          }
          onClick={openMenu}
        >
          <span className="navigation__rows"></span>
        </span>
        {isMenuOpened ? (
          <ul ref={mobileMenuRef} className="navigation-open">
            <div className="hamburger__close" onClick={closeMenu}></div>
            <li className="navigation__item">
              <NavLink className={activeMenuItem} to="/" onClick={openMenu}>
                DOMŮ
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                className={activeMenuItem}
                to="/portfolio"
                onClick={openMenu}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                className={activeMenuItem}
                to="/zivotopis"
                onClick={openMenu}
              >
                ŽIVOTOPIS
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                className={activeMenuItem}
                to="/koucovani"
                onClick={openMenu}
              >
                KOUČOVÁNÍ
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                className={activeMenuItem}
                to="/kontakt"
                onClick={openMenu}
              >
                KONTAKT
              </NavLink>
            </li>
          </ul>
        ) : null}
        <ul className="navigation__large">
          <li className="navigation__item">
            <NavLink className={activeMenuItem} to="/">
              DOMŮ
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className={activeMenuItem} to="/portfolio">
              PORTFOLIO
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className={activeMenuItem} to="/zivotopis">
              ŽIVOTOPIS
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className={activeMenuItem} to="/koucovani">
              KOUČOVÁNÍ
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className={activeMenuItem} to="/kontakt" o>
              KONTAKT
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="banner">
        <div className="banner__box"></div>
        <h1 className="banner__title">Slávka Vavřinová</h1>
        <p className="banner__text">
          ZAČÍNAJÍCÍ WEBOVÁ VÝVOJÁŘKA <br />A STUDENTKA UX
        </p>
        {/* <img className="banner__img" src={slavka} alt=" Slávka Vavřinová" />*/}
      </div>{' '}
    </>
  );
};

export default Header;
