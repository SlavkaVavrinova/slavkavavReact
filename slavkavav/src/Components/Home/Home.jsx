import React from 'react';
import { Link } from 'react-router-dom';

import Skills from '../Skills/Skills';
import Instagram from '../Instagram/Instagram';

const Home = () => {
  return (
    <>
      <div className="main">
        <p>Ahoj, jsem Slávka,</p>
        <p>
          chci tvořit weby a učit se, jak to dělat skvěle.{' '}
          <strong>
            Hledáš akčního zaměstnance nebo někoho na webovky menšího rozsahu?
          </strong>
        </p>
        <h2>Kdy můžu pomoct:</h2>
        <ul>
          <li>
            <strong>Je na to čas</strong>. Ne nebude to za týden.
          </li>
          <li>
            Potřebuješ <strong>web malého rozsahu</strong>, stránku, pět, víc o
            domluvě. Ne eshop nepůjde, ani malinkej.
          </li>
          <li>
            Nevadí ti, že to nedělám 10 let, nemám 1 000 dokonalých projektů a 1
            000 000 spokojených zákazníků
          </li>
          <li>
            Máš okouklé weby, které se ti líbí, ale budeme se domlouvat na
            změnách.
          </li>
          <li>
            <strong>Dodáš fotky a texty</strong>, které proškrtáme.
          </li>
          <li>
            {' '}
            <strong>Chceš mě zaměstnat.</strong>{' '}
          </li>
        </ul>
        <p className="contact__question">Ceník?</p>
        <p className="center">Ten tu není, nejdříve co a pak až za kolik :-)</p>

        <div className="button__row">
          <Link to="/kontakt">
            <button className="button">CHCI WEBOVKY</button>
          </Link>
        </div>
        <h2>Co už umím:</h2>
        <ul>
          <li>
            Tvořit obsah a styly komplexní webové stránky pomocí{' '}
            <strong>HTML</strong> a <strong>CSS</strong>.
          </li>

          <li>
            Používat pokročilé techniky pro tvorbu layoutu stránky (
            <strong>flexbox</strong> a <strong>CSS grid</strong>)
          </li>
          <li>Sass, Bootstrap</li>
          <li>
            Základy programování v jazyce <strong>JavaScript</strong>.
          </li>
          <li>
            Rozumím principům komponentového návrhu aplikací a ovládám základy
            knihovny <strong>React, Next.js a Node.js</strong>.
          </li>
          <li>
            Používám verzovací systém Git a{' '}
            <strong>GitHub, Webpack, npm</strong>.
          </li>
          <li>Základní funkce, podmínky a cykly v jazyce PHP.</li>
          <li>
            Základy <strong>SEO</strong>.
          </li>
          <li>
            Základy designu uživatelské zkušenosti (<strong>UX</strong>) a
            proces návrhu.
          </li>
          <li>
            Vytvořit Wireframes, <strong>prototyp</strong> i High-Fidelity
            Design <strong>ve Figmě či Adobe XD</strong>.
          </li>
          <li>Responzivní web design.</li>
        </ul>
        <Skills />
        <Instagram />
      </div>
    </>
  );
};

export default Home;
