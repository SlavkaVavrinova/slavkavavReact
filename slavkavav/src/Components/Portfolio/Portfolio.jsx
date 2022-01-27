import React from 'react';

import slavkaVav from './img/SlavkaVav.jpg';
import appkaHyposka from './img/appka-hyposka.jpeg';
import chataRuzenka from './img/chata-ruzenka.jpeg';
import budejcanda from './img/budejcanda.jpeg';
import gerta from './img/gerta.jpeg';
import statek from './img/statek.jpeg';
import chataGerta from './img/chata-gerta.jpeg';

const Portfolio = () => (
  <div className="main">
    <h2>Portfolio</h2>

    {webs.map((web) => (
      <div className="item" key={web.id}>
        <img className="item__img" src={web.img} alt={web.alt} />
        <div className="item__text">
          <p className="item__id">{web.id}</p>
          <h3 className="item__title">{web.name}</h3>
          <p>{web.info}</p>
          <a href={web.href} target="_blank" rel="noreferrer">
            <button className="button">Prohlédnout web</button>
          </a>
        </div>
      </div>
    ))}
  </div>
);

const webs = [
  /* {
    id: '06',
    img: `${budejcanda}`,
    alt: 'Web Budějčanda',
    name: 'Budějčanda',
    info: 'Next.js, Frontendová část webu',
    href: 'https:/budejcanda.cz/'
  },*/
  {
    id: '06',
    img: `${slavkaVav}`,
    alt: 'Web SlavkaVav',
    name: 'SlavkaVav',
    info: 'React,Sass',
    href: 'https://www.slavkavav.cz/',
  },
  {
    id: '05',
    img: `${gerta}`,
    alt: 'Web Pension Gerta',
    name: 'Pension Gerta',
    info: 'Statický web se šablonou Eleventy',
    href: 'https://www.gerta.cz/',
  },
  {
    id: '04',
    img: `${appkaHyposka}`,
    alt: 'Web Appka Hypoška',
    name: 'Appka Hypoška',
    info: 'React, závěrečný projekt Digitální akademie',
    href: 'https://appkahyposka.cz/',
  },
  {
    id: '03',
    img: `${statek}`,
    alt: 'Web Statek Chlumeček',
    name: 'Statek Chlumeček',
    info: 'WordPress',
    href: 'https://www.statekchlumecek.cz/',
  },
  {
    id: '02',
    img: `${chataRuzenka}`,
    alt: 'Web Chata Růženka',
    name: 'Chata Růženka',
    info: 'WordPress',
    href: 'http://www.chataruzenka.cz/',
  },

  {
    id: '01',
    img: `${chataGerta}`,
    alt: 'Web Chata Gerta',
    name: 'Chata Gerta',
    info: 'Web se předělává',
    href: 'http://www.chatagerta.cz/',
  },
];

export default Portfolio;
