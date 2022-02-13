import React from 'react';

import gerta from './img/gerta.png';
import restaurant from './img/restaurant.png';
import school from './img/school.png';

const Ux = () => (
  <div className="main">
    <h2>Ux Portfolio</h2>
    <p>Hello, i'm Slávka</p>
    <p>I am currently completing my UX portfolio and here are my jobs:</p>
    <p>
      Ux is not added to the navigation because it must first be translated into
      my site's language. Thank you for understanding. Now is it only for
      finishing UX course.{' '}
    </p>
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

          <a href={web.href} target="_blank" rel="noreferrer">
            <button className="button button--targetBlank">
              SEE CASE STUDY
            </button>
          </a>
        </div>
      </div>
    ))}
  </div>
);

const webs = [
  {
    id: '03',
    img: `${school}`,
    alt: 'Design a user experience to help tutor adults in web development',
    name: 'Design a user experience to help tutor adults in web development',
    href: 'https://drive.google.com/file/d/1ZOet59zNF9pIbzomaEXt4s9gCawbHbH_/view?usp=sharing',
  },
  {
    id: '02',
    img: `${gerta}`,
    alt: ' Design a responsive website for accommodation',
    name: ' Design a responsive website for accommodation',
    href: 'https://drive.google.com/file/d/1wBir4BR7b0hAG89Ohzws-OFgaSQj2mWP/view?usp=sharing',
  },
  {
    id: '01',
    img: `${restaurant}`,
    alt: 'Slavka ́s restaurant App',
    name: 'Slavka ́s restaurant App',
    href: 'https://drive.google.com/file/d/1zKJOrAr4YnJCTYIiTAcbBrqP8jWEfBSd/view?usp=sharing',
  },
];

export default Ux;
