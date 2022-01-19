import appkaHyposka from './img/appka-hyposka.jpeg';
import chataRuzenka from './img/chata-ruzenka.jpeg';
import budejcanda from './img/budejcanda.jpeg';
import gerta from './img/gerta.jpeg';
import statek from './img/statek.jpeg';
import chataGerta from './img/chata-gerta.jpeg';

const Portfolio = () => {
  return (
    <>
      <h2>Portfolio</h2>
      <div className="item">
        <img className="item__img" src={budejcanda} alt="Web Appka Hypoška" />
        <div>
          <p>01</p>
          <h3>Budějčanda</h3>
          <p>Frontendová část webu</p>
          <button>Prohlédnout</button>
        </div>
      </div>

      <div className="item">
        <img className="item__img" src={gerta} alt="Web Appka Hypoška" />
        <div>
          <p>02</p>
          <h3>Pension Gerta</h3>
          <p>Responzivní web</p>
          <button>Prohlédnout</button>
        </div>
      </div>

      <div className="item">
        <img className="item__img" src={appkaHyposka} alt="Web Appka Hypoška" />
        <div>
          <p>02</p>
          <h3>Pension Gerta</h3>
          <p>Responzivní web</p>
          <button>Prohlédnout</button>
        </div>
      </div>

      <div className="item">
        <img className="item__img" src={statek} alt="Web Appka Hypoška" />
        <div>
          <p>02</p>
          <h3>Pension Gerta</h3>
          <p>Responzivní web</p>
          <button>Prohlédnout</button>
        </div>
      </div>

      <div className="item">
        <img className="item__img" src={chataRuzenka} alt="Web Appka Hypoška" />
        <div>
          <p>02</p>
          <h3>Pension Gerta</h3>
          <p>Responzivní web</p>
          <button>Prohlédnout</button>
        </div>
      </div>

      <div className="item">
        <img className="item__img" src={chataGerta} alt="Web Appka Hypoška" />
        <div>
          <p>02</p>
          <h3>Pension Gerta</h3>
          <p>Responzivní web</p>
          <button>Prohlédnout</button>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
