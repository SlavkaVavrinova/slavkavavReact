const Contact = () => {
  return (
    <div className="main">
      <h2>Máte něco na srdci?</h2>
      <p>Jsem vám plně k dispozici. Máte jakékoli dotazy, sem s nimi! </p>

      <form id="reservationForm" class="form">
        <div class="form__field">
          <label class="form__label" for="name">
            Jméno<span class="required">*</span>
          </label>
          <input
            class="form__input"
            type="text"
            name="name"
            id="name"
            required
          />
        </div>

        <div class="form__field">
          <label class="form__label" for="email">
            E-mail <span class="required">*</span>
          </label>
          <input
            class="form__input"
            type="email"
            name="email"
            id="email"
            required
            value="@"
          />
        </div>

        <div class="form__field">
          <label class="form__label" for="subject">
            Předmět<span class="required">*</span>
          </label>
          <input
            class="form__input"
            type="text"
            name="subject"
            id="subject"
            required
          />
        </div>

        <div class="form__field">
          <label class="form__label" for="message">
            Zpráva<span class="required">*</span>
          </label>
          <textarea
            class="form__textarea"
            name="message"
            id="message"
            rows="5"
            cols="20"
            maxlength="2000"
            required
          ></textarea>
        </div>
        <p class="text-right small">
          <span class="required">*</span> Požadované údaje
        </p>

        <div class="error-message" id="error-message"></div>

        <div class="form__button">
          <button class="button" type="submit" name="send" id="send">
            Odeslat
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
