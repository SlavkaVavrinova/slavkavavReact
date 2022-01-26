import React from 'react';

import slavka from './img/stanislavaVavrinova.jpg';
import phone from './img/phone.svg';
import email from './img/email.svg';
import address from './img/address.svg';
import web from './img/web.svg';
import linkedin from './img/linkedin.svg';
import instagram from './img/instagram.svg';
import czechitas from './img/logoCzechitas.svg';
import github from './img/github.svg';
import coursera from './img/coursera.svg';
import google from './img/google.svg';
import wesbos from './img/wesbos.png';

const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div class="page">
        <div className="cv__hero">
          <img class="foto" src={slavka} alt="Stanislava Vavřinová" />
          <div class="hero__rightSide">
            <h1 className="cv__title">Ing. Stanislava Vavřinová</h1>

            <ul class="contact">
              <li class="contact__phoneEmail">
                <a className="cv__link" href="tel:+420775959988">
                  <img src={phone} alt="Ikona telefon" />
                  +420 775 959 988
                </a>
                <a className="cv__link" href="malito:vavrinovas@gmail.com">
                  <img src={email} alt="Ikona email" />
                  vavrinovas@gmail.com
                </a>
              </li>

              <li class="contact__address">
                <div>
                  <img src={address} alt="Ikona adresy" /> České Budějovices
                </div>

                <a className="cv__link" href="https://slavkavav.cz/">
                  <img src={web} alt="Logo web" />
                  https://slavkavav.cz/
                </a>
              </li>

              <li class="contact__socialNetworks">
                <a
                  className="cv__link"
                  href="https://www.linkedin.com/in/stanislava-vav%C5%99inov%C3%A1-b325b6204/"
                  target="_blanc"
                >
                  <img
                    class="logoSocialNetworks"
                    src={linkedin}
                    alt="Logo LinkedIn"
                  />
                  Stanislava Vavřinová
                </a>
                <a
                  className="cv__link"
                  href="https://www.instagram.com/slavkavavrinova/"
                  target="_blanc"
                >
                  <img
                    class="logoSocialNetworks"
                    src={instagram}
                    alt="Logo Instagram"
                  />
                  slavkavavrinova
                </a>
                <a
                  className="cv__link"
                  href="https://github.com/SlavkaVavrinova"
                  target="_blanc"
                >
                  <img
                    class="logoSocialNetworks"
                    src={github}
                    alt="Logo GitHub"
                  />
                  SlavkaVavrinova
                </a>
              </li>
            </ul>

            <div class="important">
              <section class="important__it">
                <h2 className="cv__h2">IT znalost</h2>
                <ul className="cv__list">
                  <li>HTML/CSS</li>
                  <li>JavaScript</li>
                  <li>React, Next.js</li>
                  <li>PHP (okrajově)</li>
                  <li>UX Design</li>
                  <li>WordPress</li>
                  <li>Bootstrap, SASS</li>
                  <li>Adobe XD, Figma, Canva, Photoshop</li>
                </ul>
              </section>
              <section class="important__portfolio">
                <h2 className="cv__h2">Portfolio</h2>
                <ul>
                  <li>
                    <a
                      className="cv__link"
                      href="https://slavkavav.cz"
                      target="_blanc"
                    >
                      https://slavkavav.cz
                    </a>
                    React
                  </li>
                  <li>
                    <a
                      className="cv__link"
                      href="https://budejcanda.cz"
                      target="_blanc"
                    >
                      https://budejcanda.cz
                    </a>
                    Next.js
                  </li>
                  <li>
                    <a
                      className="cv__link"
                      href="https://gerta.cz"
                      target="_blanc"
                    >
                      https://gerta.cz
                    </a>
                    Eleventy
                  </li>
                  <li>
                    <a
                      className="cv__link"
                      href="https://appkahyposka.cz"
                      target="_blanc"
                    >
                      https://appkahyposka.cz
                    </a>
                    React
                  </li>

                  <li>
                    <a
                      className="cv__link"
                      href="https://chatagerta.cz"
                      target="_blanc"
                    >
                      https://chatagerta.cz
                    </a>
                    WP
                  </li>
                  <li>
                    <a
                      className="cv__link"
                      href="https://chataruzenka.cz"
                      target="_blanc"
                    >
                      https://chataruzenka.cz
                    </a>
                    WP
                  </li>
                  <li>
                    <a
                      className="cv__link"
                      href="https://statekchlumecek.cz"
                      target="_blanc"
                    >
                      https://statekchlumecek.cz
                    </a>
                    WP
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>

        <div className="cv__wrapper">
          <div class="container">
            <div class="container__leftSide">
              <section class="aboutMe">
                <h2 className="cv__h2">O mně</h2>
                <p className="noMargin">
                  S webem jsem pracovala na amatérské úrovni, ale mateřská
                  dovolená v kombinaci s lockdownem to změnila. Volný čas jsem
                  věnovala studiu a nyní chci najít práci, kde znalosti využiji
                  a prohloubím je.
                </p>
              </section>

              <section class="courses">
                <h2 className="cv__h2">Kurzy</h2>
                <img
                  class="logoCzechitas"
                  src={czechitas}
                  alt="Logo Czechitas"
                />
                <ul className="cv__list">
                  <li>Digitální akademie Web</li>
                  <li>Staň se kodérkou</li>
                  <li>Dlouhodobý kurz PHP</li>
                  <li>Bootstrap</li>
                  <li>Wordpress 1, 2, 3</li>
                  <li>Facebook, Instagram, LinkedIn</li>
                </ul>
                <div class="google">
                  <img
                    class="logoCoursera"
                    src={coursera}
                    alt="Logo Coursera"
                  />
                  <img class="logoGoogle" src={google} alt="Logo Google" />
                </div>
                <ul className="cv__list">
                  <li>UX Design Professional Certificate</li>
                </ul>

                {/* <img class="logoUdemy" src={udemy} alt="Logo Udemy" />
            <ul>
              <li>Complete React Developer 2021</li>
            </ul> */}
                <img class="logoUdemy" src={wesbos} alt="Logo Wes Bos" />
                <ul className="cv__list">
                  <li>Beginner JavaScript</li>
                  <li>ES6 for Everyone</li>
                  <li>React For Beginners</li>
                  <li>Začínám: Advanced React and GraphQL</li>
                </ul>
              </section>
            </div>

            <div class="container__rightSide">
              <section class="work">
                <h2 className="cv__h2">Pracovní zkušenosti</h2>
                <h3 className="cv__h3">
                  Živnostenské oprávnění | 2021 - současnost
                </h3>
                <ul className="cv__list">
                  <li>
                    {' '}
                    <strong>Czechitas</strong> - kouč HTML/CSS, Figma, React
                  </li>
                  <li>Tvorba webu</li>
                </ul>
                <h3 className="cv__h3">Rodičovská pauza | 2017 – současnost</h3>
                <ul className="cv__list">
                  <li>Výpomoc v rodinném penzionu, zajištění dotací</li>
                  <li>Ubytovací služby, vedení účetnictví</li>
                </ul>

                <h3 className="cv__h3">
                  Československá obchodní banka, a.s. | 2008 - 2017
                </h3>
                <p className="noMargin">
                  České Budějovice – Hroznová, úvěrový specialista
                </p>
                <p className="noMargin">
                  Český Krumlov – Špičák, klientský poradce
                </p>
                <ul className="cv__list">
                  <li>
                    Zpracování hypotečních, spotřebitelských a podnikatelských
                    úvěrů, posuzování bonity klienta
                  </li>
                  <li>Akvizice nových a obsluha stávajících klientů</li>
                  <li>Odpovědnost za výsledky pobočky v oblasti financování</li>
                  <li>
                    Školení kolegů a externích zpracovatelů v úvěrové doméně
                  </li>
                  <li>Aktivní spolupráce s ostatními útvary banky</li>
                  <li>
                    Vzdělávání v bankovnictví, prodejních a komunikačních
                    dovednostech
                  </li>
                </ul>
              </section>

              <section class="education">
                <h2 className="cv__h2">Vzdělání</h2>
                <h3 className="cv__h3">
                  Jihočeská univerzita, Ekonomická fakulta | 2005 - 2010
                </h3>
                <ul className="cv__list">
                  <li>Studijní program Ekonomika a management, titul Ing.</li>
                  <li>Obor Obchodní podnikání</li>
                </ul>
              </section>
            </div>
          </div>

          <div class="container">
            <div class="container__leftSide">
              <section class="languages">
                <h2 className="cv__h2">Jazykové znalosti</h2>
                <ul className="cv__list">
                  <li>Anglický jazyk</li>
                  <li>Německý jazyk</li>
                  <li>Francouzský jazyk velice pasivně</li>
                </ul>
              </section>
            </div>
            <div class="container__rightSide">
              <section class="other">
                <h2 className="cv__h2">Ostatní</h2>
                <ul className="cv__list">
                  <li>Znalost Microsoft Office</li>
                  <li>Řidičský průkaz skupiny B, aktivní řidič</li>
                  <li>Samostatnost, ochota na sobě pracovat, učit se</li>
                  <li>Prezentační dovednosti, profesionální vystupování</li>
                  <li>Orientace ve finančních výkazech</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ComponentToPrint;
