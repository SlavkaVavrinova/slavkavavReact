import React from 'react';

import email from '../Cv/img/email.svg';
import address from '../Cv/img/address.svg';
import web from '../Cv/img/web.svg';
import linkedin from '../Cv/img/linkedin.svg';
import instagram from '../Cv/img/instagram.svg';
import github from '../Cv/img/github.svg';

import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className="main">
      <h2>Kontakt</h2>
      <div className="center contact__socialIcons--center">
        <div className="contact__row">
          <img className="contact__icon" src={email} alt="Ikona email" />
          <a className="link" href="malito:vavrinovas@gmail.com">
            vavrinovas@gmail.com
          </a>
        </div>

        <div className="contact__row">
          <img className="contact__icon" src={address} alt="Ikona adresy" />{' '}
          <p>České Budějovice</p>
        </div>

        <div className="contact__row">
          <img className="contact__icon" src={web} alt="Logo web" />
          <a className="link" href="https://slavkavav.cz/">
            https://slavkavav.cz/
          </a>
        </div>
      </div>
      <p className="contact__question">Máte něco na srdci?</p>
      <p className="center">
        Chcete si popovídat o spolupráci, najdete mě na{' '}
        <a
          className="link"
          href="https://www.linkedin.com/in/stanislava-vav%C5%99inov%C3%A1-b325b6204/"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        ,{' '}
        <a
          className="link"
          href="https://www.instagram.com/slavkavavrinova/"
          target="_blank"
          rel="noreferrer"
        >
          Instagramu
        </a>{' '}
        nebo mi pošlete{' '}
        <a className="link" href="mailto:slavka.vav@gmail.com">
          e-mail
        </a>{' '}
        či zanechte vzkaz.
      </p>

      <ContactForm />

      <div className="contact__socialIcons">
        <a
          href="https://www.linkedin.com/in/stanislava-vav%C5%99inov%C3%A1-b325b6204/"
          target="_blanc"
        >
          <img className="contact__icon" src={linkedin} alt="Logo LinkedIn" />
        </a>
        <a href="https://www.instagram.com/slavkavavrinova/" target="_blanc">
          <img className="contact__icon" src={instagram} alt="Logo Instagram" />
        </a>
        <a href="https://github.com/SlavkaVavrinova" target="_blanc">
          <img className="contact__icon" src={github} alt="Logo GitHub" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
