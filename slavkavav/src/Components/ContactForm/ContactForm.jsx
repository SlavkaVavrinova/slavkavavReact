import React, { useEffect, useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import validator from 'validator';

import { db } from '../../db';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const [nameMessageValid, setNameMessageValid] = useState(true);

  const validName = nameMessageValid !== true ? 'Chybí vyplnit jméno' : '';
  useEffect(() => {
    setNameMessageValid(name.length > 2);
  }, [name]);

  const [emailMessageValid, setemailMessageValid] = useState(true);
  const validEmail = emailMessageValid !== true ? 'Zatejte platný email' : '';
  useEffect(() => {
    setemailMessageValid(validator.isEmail(email));
  }, [email]);

  const [messageMessageValid, setMessageMessageValid] = useState(true);
  const validMessage =
    messageMessageValid !== true ? 'Chybí vyplnit zprávu' : '';

  useEffect(() => {
    setMessageMessageValid(message.length > 2);
  }, [message]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validator.isEmail(email) && name.length > 2 && message.length > 2) {
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
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        setError('');
      } catch (err) {
        setResponse(`Jejda, něco se nepovedlo. Zadej znovu.`);
      }
    } else {
      setError(`Zadej chybějící údaje, formulář není odeslán.`);
      setResponse('');
    }
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
        />
        <div className="infoField">{validName}</div>
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
        />
        <div className="infoField">{validEmail}</div>
      </div>

      <div className="form__field">
        <label className="form__label" for="subject">
          Předmět
        </label>
        <input
          className="form__input"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          type="text"
          name="subject"
          id="subject"
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
        ></textarea>
        <div className="infoField">{validMessage}</div>
      </div>
      <p className="right small">
        <span className="required">*</span> Požadované údaje
      </p>

      <div className="error-message" id="error-message"></div>

      <div className="button__row">
        <button className="button" type="submit" name="send" id="send">
          Odeslat
        </button>
      </div>
      <p className="success-message">{response}</p>
      <p className="error-message">{error}</p>
    </form>
  );
};

export default ContactForm;
