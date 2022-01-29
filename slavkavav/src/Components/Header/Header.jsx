import React from 'react';

import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <>
      <Navigation />
      <div className="banner">
        <div className="banner__box"></div>
        <div className="banner__info">
          <h1 className="banner__title">Slávka Vavřinová</h1>
          <p className="banner__text">
            ZAČÍNAJÍCÍ WEBOVÁ VÝVOJÁŘKA <br />A STUDENTKA UX
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
