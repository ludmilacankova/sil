import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Request() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_on60v1w", // ID služby
        "template_41uskof", // ID template
        form.current,
        "Cv-DG9o89o2cH_DBs" // Public key
      )
      .then(
        (result) => {
          setIsSending(false);
          setStatusMessage("Děkujeme, formulář byl úspěšně odeslán.");
          form.current.reset();
        },
        (error) => {
          setIsSending(false);
          setStatusMessage(
            "Nastala chyba při odesílání. Zkuste to prosím znovu."
          );
        }
      );
  };

  return (
    <div className="section">
      <h1>Poptávkový formulář</h1>
      <p>
        Zadání poptávky je zcela <strong>zdarma</strong> a{" "}
        <strong>nezávazné</strong>.
      </p>

      {isSending ? (
        <div className="loading">
          <div className="spinner"></div>
          <p>Odesílání...</p>
        </div>
      ) : (
        <>
          {statusMessage && <p className="message">{statusMessage}</p>}

          <form ref={form} onSubmit={sendEmail}>
            <label>
              Jméno a příjmení:
              <input type="text" name="name" required />
            </label>

            <label>
              Název firmy:
              <input type="text" name="company" />
            </label>

            <label>
              E-mail:
              <input type="email" name="email" required />
            </label>

            <label>
              Telefon:
              <input type="tel" name="phone" required />
            </label>

            <label htmlFor="service">Požadovaná služba</label>
            <select id="service" name="service" required>
              <option value="" disabled selected hidden>
                -- Vyberte oblast --
              </option>
              <option value="">-- Vyberte službu --</option>
              <option value="Poradenství v těžkých životních situacích">
                Poradenství v těžkých životních situacích
              </option>
              <option value="Zastupování na úřadech">
                Zastupování na úřadech
              </option>
              <option value="Vedení účetnictví a daňová přiznání">
                Vedení účetnictví a daňová přiznání
              </option>
              <option value="Školení">Školení</option>
              <option value="Mentoring">Mentoring</option>
              <option value="Jiné">Jiné</option>
            </select>

            <label>
              Další informace:
              <textarea name="message" rows="7" />
            </label>

            <label className="checkbox-label">
              <input type="checkbox" name="terms" required />
              Souhlasím se{" "}
              <a href="../download/gdpr.pdf">zpracováním osobních údajů</a>.
            </label>

            <button type="submit">
              <img src="/email.svg" alt="email" /> &nbsp;&nbsp;Odeslat
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default Request;
