import slavka from '../Header/img/slavkaWeb.jpg';

const Portfolio = () => {
  return (
    <>
      <h2>Portfolio</h2>
      <div>
        <img className="banner__img" src={slavka} alt=" Slávka Vavřinová" />
        <div>
          <p>01</p>
          <h3>Budějčanda</h3>
          <p>Frontendová část webu</p>
          <button>Prohlédnout</button>
        </div>
      </div>

      <div>
        <img className="banner__img" src={slavka} alt=" Slávka Vavřinová" />
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
