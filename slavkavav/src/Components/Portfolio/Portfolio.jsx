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
        <div className="item__imgBorder">
          <picture>
            <img className="item__img" src={web.img} alt={web.alt} />
          </picture>
        </div>
        <div className="item__text">
          <p className="item__id">{web.id}</p>
          <h3 className="item__title">{web.name}</h3>
          <p>{web.info}</p>
          <a
            className={web.prototypDisplay}
            href={web.prototypHref}
            target="_blank"
            rel="noreferrer"
          >
            <button className="button button--targetBlank button--secondary">
              Prototyp
            </button>
          </a>
          <a href={web.href} target="_blank" rel="noreferrer">
            <button className="button button--targetBlank">
              Prohlédnout web
            </button>
          </a>
        </div>
      </div>
    ))}
  </div>
);

const webs = [
  {
    id: '07',
    img: `${budejcanda}`,
    alt: 'Web Budějčanda',
    name: 'Budějčanda',
    info: 'Next.js - Veliké děkuji Standovi Kosáčkovi z Czechitas za rady, pomoc a hlavně souhlas, že to dáme. Jeho zásluha je celý backend.',
    href: 'https:/budejcanda.cz/',
    prototypDisplay: 'prototypNo',
    prototypHref: '',
  },
  {
    id: '06',
    img: `${slavkaVav}`,
    alt: 'Web SlavkaVav',
    name: 'SlavkaVav',
    info: 'React,Sass',
    href: 'https://www.slavkavav.cz/',
    prototypDisplay: 'prototypNo',
    prototypHref: '',
  },
  {
    id: '05',
    img: `${gerta}`,
    alt: 'Web Pension Gerta',
    name: 'Pension Gerta',
    info: 'Statický web se šablonou Eleventy',
    href: 'https://www.gerta.cz/',
    prototypDisplay: 'prototypDisplay',
    prototypHref:
      'https://xd.adobe.com/view/29edc6e2-15be-4421-82b5-1db34a6144fd-7cbe/',
  },
  {
    id: '04',
    img: `${statek}`,
    alt: 'Web Statek Chlumeček',
    name: 'Statek Chlumeček',
    info: 'WordPress',
    href: 'https://www.statekchlumecek.cz/',
    prototypDisplay: 'prototypNo',
    prototypHref: '',
  },
  {
    id: '03',
    img: `${chataRuzenka}`,
    alt: 'Web Chata Růženka',
    name: 'Chata Růženka',
    info: 'WordPress',
    href: 'http://www.chataruzenka.cz/',
    prototypDisplay: 'prototypNo',
    prototypHref: '',
  },
  {
    id: '02',
    img: `${appkaHyposka}`,
    alt: 'Web Appka Hypoška',
    name: 'Appka Hypoška',
    info: 'React, závěrečný projekt Digitální akademie',
    href: 'https://appkahyposka.cz/',
    prototypDisplay: 'prototypNo',
    prototypHref: '',
  },
  {
    id: '01',
    img: `${chataGerta}`,
    alt: 'Web Chata Gerta',
    name: 'Chata Gerta',
    info: 'Web se předělává',
    href: 'http://www.chatagerta.cz/',
    prototypDisplay: 'prototypNo',
    prototypHref: '',
  },
];

export default Portfolio;
