import React from 'react';

import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className="main">
      <h2>Kontakt</h2>
      <p className="contact__question">Máte něco na srdci?</p>
      <p className="center">
        Jsem vám plně k dispozici. Máte jakékoli dotazy, sem s nimi!{' '}
      </p>

      <ContactForm />
    </div>
  );
};

export default Contact;
