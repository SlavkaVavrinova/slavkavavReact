import React from 'react';

import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
  return (
    <div className="main">
      <h2 className="center">Máte něco na srdci?</h2>
      <p className="center">
        Jsem vám plně k dispozici. Máte jakékoli dotazy, sem s nimi!{' '}
      </p>

      <ContactForm />
    </div>
  );
};

export default Contact;
