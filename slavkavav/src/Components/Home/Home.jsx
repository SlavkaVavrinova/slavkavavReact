import Skills from '../Skills/Skills';

import Instagram from '../Instagram/Instagram';

const Home = () => {
  return (
    <>
      <div className="main">
        <p>Chci tvořit weby, tak se učím, jak to dělat dobře.</p>

        <h2>Co už umím:</h2>

        <ul>
          <li>
            Tvořit obsah a styly komplexní webové stránky pomocí HTML a CSS,
            používat pokročilé techniky pro tvorbu layoutu stránky (flexbox a
            CSS grid)
          </li>
          <li>Základy programování v jazyce JavaScript.</li>
          <li>Základní funkce, podmínky a cykly v jazyce PHP.</li>
          <li>
            Rozumím principům komponentového návrhu aplikací a ovládám základy
            knihovny React a Node.js
          </li>
          <li>Používám verzovací systém Git a GitHub, Webpack, npm.</li>
          <li>Základy designu uživatelské zkušenosti (UX) a proces návrhu.</li>
          <li>
            Vytvořit Wireframes, prototyp i High-Fidelity Design ve Figmě či
            Adobe XD
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
