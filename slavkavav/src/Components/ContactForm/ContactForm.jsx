import React, { useEffect, useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import validator from 'validator';

import { db } from '../../db';

const ContactForm = () => {
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  /* Validation name */
  const [name, setName] = useState('');
  const [nameNoticeValid, setNameNoticeValid] = useState(true);
  const [nameStatus, setNameStatus] = useState(true);

  const validName = nameNoticeValid !== true ? 'Chybí vyplnit jméno' : '';
  useEffect(() => {
    setNameNoticeValid(name.length > 2);
  }, [name]);

  const handleNameChange = (event) => {
    setNameStatus(false);
    setName(event.target.value);
  };

  let nameClassses = 'form__input ';
  if (!nameStatus) {
    nameClassses += nameNoticeValid ? 'validBorder' : 'invalidBorder';
  }

  /* Validation email */
  const [email, setEmail] = useState('');
  const [emailNoticeValid, setEmailNoticeValid] = useState(true);
  const [emailStatus, setEmailStatus] = useState(true);

  const validEmail = emailNoticeValid !== true ? 'Zatejte platný email' : '';
  useEffect(() => {
    setEmailNoticeValid(validator.isEmail(email));
  }, [email]);

  const handleEmailChange = (event) => {
    setEmailStatus(false);
    setEmail(event.target.value.trim());
  };

  let emailClassses = 'form__input ';
  if (!emailStatus) {
    emailClassses += emailNoticeValid ? 'validBorder' : 'invalidBorder';
  }

  /* Subject */
  const [subject, setSubject] = useState('');

  /* Validation message */
  const [message, setMessage] = useState('');
  const [messageNoticeValid, setMessageNoticeValid] = useState(true);
  const [messageStatus, setMessageStatus] = useState(true);

  const validMessage =
    messageNoticeValid !== true ? 'Chybí vyplnit zprávu' : '';
  useEffect(() => {
    setMessageNoticeValid(message.length > 2);
  }, [message]);

  const handleMessageChange = (event) => {
    setMessageStatus(false);
    setMessage(event.target.value);
  };

  let messageClassses = 'form__textarea ';
  if (!messageStatus) {
    messageClassses += messageNoticeValid ? 'validBorder' : 'invalidBorder';
  }

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
        setNameStatus(true);
        setEmailStatus(true);
        setMessageStatus(true);
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
          className={nameClassses}
          value={name}
          onChange={handleNameChange}
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
          className={emailClassses}
          value={email}
          onChange={handleEmailChange}
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
          className={messageClassses}
          value={message}
          onChange={handleMessageChange}
          rows={5}
          name="message"
          id="message"
          cols="20"
          maxLength="2000"
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
