import logo from './../../logo.svg';
import slavka from './img/slavkaWeb.jpg';

const Header = () => {
  return (
    <>
      <div className="navigation">
        <img
          className="navigation__logo"
          src={logo}
          alt="Logo Slávka Vavřinová"
        />
        <span className="navigation__hamburger">
          <span className="navigation__rows"></span>
        </span>
        <ul className="navigation__web">
          <li>Portfolio</li>
          <li>O mně</li>
          <li>Koučink</li>
          <li>Kontakt</li>
        </ul>
      </div>
      <div className="banner">
        <img className="banner__img" src={slavka} alt=" Slávka Vavřinová" />
      </div>
    </>
  );
};

export default Header;
