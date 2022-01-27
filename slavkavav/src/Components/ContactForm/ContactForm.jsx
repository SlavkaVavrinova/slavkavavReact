import React, { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

import { db } from '../../db';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await addDoc(collection(db, 'contact'), {
        name: name,
        email: email,
        subject: subject,
        message: message,
        created: Timestamp.now(),
        completed: false,
      });
      setResponse(
        `Formulář byl úspěšně odeslán. Odpověď dorazí na Váš email (${email}), jakmile bude chvilka. Děkuji Slávka`,
      );
    } catch (err) {
      setResponse(`Jejda, něco se nepovedlo. Zadej znovu.`);
    }

    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <form id="reservationForm" className="form" onSubmit={handleSubmit}>
      <div className="form__field">
        <label className="form__label" for="name">
          Jméno<span className="required">*</span>
        </label>
        <input
          className="form__input"
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          name="name"
          id="name"
          required
        />
      </div>

      <div className="form__field">
        <label className="form__label" for="email">
          E-mail <span className="required">*</span>
        </label>
        <input
          className="form__input"
          value={email}
          onChange={(event) => setEmail(event.target.value.trim())}
          type="email"
          name="email"
          id="email"
          required
        />
      </div>

      <div className="form__field">
        <label className="form__label" for="subject">
          Předmět<span className="required">*</span>
        </label>
        <input
          className="form__input"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          type="text"
          name="subject"
          id="subject"
          required
        />
      </div>

      <div className="form__field">
        <label className="form__label" for="message">
          Zpráva<span className="required">*</span>
        </label>
        <textarea
          className="form__textarea"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={5}
          name="message"
          id="message"
          cols="20"
          maxlength="2000"
          required
        ></textarea>
      </div>
      <p className="text-right small">
        <span className="required">*</span> Požadované údaje
      </p>

      <div className="error-message" id="error-message"></div>

      <div className="form__button">
        <button className="button" type="submit" name="send" id="send">
          Odeslat
        </button>
      </div>
      <p>{response}</p>
    </form>
  );
};

export default ContactForm;
